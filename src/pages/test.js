import React, { useEffect, useRef, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fa1,
  fa2,
  fa3,
  fa4,
  fa5,
  fa6,
} from "@fortawesome/free-solid-svg-icons";
import API from "../../API";
import { show } from "../../Store/AllReducers/messageSlice";
import { useDispatch, useSelector } from "react-redux";
import OldAllMarksResult from "./OldResult/OldAllMarksResult";
import ReactToPrint from "react-to-print";
import { useLocation, useNavigate } from "react-router-dom";

function ResultTimeLine() {
  const [oldData, setOldData] = useState();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const componentRef = useRef([]);
  const { myUser } = useSelector((state) => state.currentUser);
  const navigate = useNavigate();
  const { state } = useLocation();

  const [currentProcessed, setCurrentProcessed] = useState({
    isProcessed: "",
    message: "",
  });

  useEffect(() => {
    setLoading(true);
  }, []);

  useEffect(() => {
    if (myUser?.role?.name == "STUDENT") {
      getResult(
        setOldData,
        setUser,
        dispatch,
        `${myUser.username}`,
        setLoading
      );
      checkCurrentResultProcessed(
        dispatch,
        myUser.username,
        setCurrentProcessed
      );
    } else if (
      myUser?.role?.name == "SUPER" ||
      myUser?.role?.name == "COE" ||
      myUser?.role?.name == "ADMIN" ||
      myUser?.role?.name == "EXAMCOORDINATOR"
    ) {
      getResult(setOldData, setUser, dispatch, state?.prn, setLoading);
      checkCurrentResultProcessed(dispatch, state?.prn, setCurrentProcessed);
    } else if (myUser?.role?.name == "INSTITUTE") {
      getResult(
        setOldData,
        setUser,
        dispatch,
        state?.prn,
        setLoading,
        myUser.username
      );
      checkCurrentResultProcessed(dispatch, state?.prn, setCurrentProcessed);
    }
  }, [myUser]);

  useEffect(() => {
    componentRef.current = componentRef?.current?.slice(0, oldData?.length);
  }, [oldData]);

  console.log("o", oldData);

  return (
    <>
      {/* {myUser?.role?.name == "SUPER" ? ( */}
      <>
        {oldData?.length > 0 ? (
          <>
            <div className="d-flex float-right hide">
              <button
                onClick={() => {
                  navigate(-1);
                }}
                className="hide goBackPage"
              >
                Go back
              </button>
            </div>
            <div className="App">
              <>
                {currentProcessed.isProcessed == 0 ? (
                  <div>
                    <font color="red" size="4">
                      {currentProcessed.message}
                    </font>
                  </div>
                ) : null}
                <h3>Result</h3>
                <VerticalTimeline layout="1-column-left" lineColor="grey">
                  {oldData &&
                    oldData?.map((data, index) => {
                      const contentStyle = {
                        background: "#fbfcf0",
                        border: "1px solid grey",
                        boxShadow: "4px 4px 8px #000000",
                      };
                      const arrowStyle = {
                        background: "white",
                        borderRight: "7px solid grey",
                      };
                      return (
                        <VerticalTimelineElement
                          key={index}
                          className="vertical-timeline-element--work"
                          contentStyle={contentStyle}
                          contentArrowStyle={arrowStyle}
                          date={data?.sub[0].ExamSeason}
                          iconStyle={{
                            background: "rgb(33, 150, 243)",
                            color: "#fff",
                          }}
                          icon={
                            <FontAwesomeIcon
                              icon={
                                data?.sub[0]?.subject_info?.year == 1
                                  ? fa1
                                  : data?.sub[0]?.subject_info?.year == 2
                                  ? fa2
                                  : data?.sub[0]?.subject_info?.year == 3
                                  ? fa3
                                  : data?.sub[0]?.subject_info?.year == 4
                                  ? fa4
                                  : data?.sub[0]?.subject_info?.year == 5
                                  ? fa5
                                  : data?.sub[0]?.subject_info?.year == 6
                                  ? fa6
                                  : null
                              }
                            />
                          }
                        >
                          <>
                            <div className="d-flex justify-content-between">
                              <ReactToPrint
                                trigger={() => (
                                  <button className="btn btn-warning">
                                    Print this out!
                                  </button>
                                )}
                                content={() => {
                                  return componentRef.current[index];
                                }}
                              />
                            </div>
                            <br />

                            <OldAllMarksResult
                              ref={(el) => (componentRef.current[index] = el)}
                              data={data}
                              user={user}
                            />
                          </>
                        </VerticalTimelineElement>
                      );
                    })}
                </VerticalTimeline>
              </>
            </div>
          </>
        ) : oldData?.length == 0 ? (
          <div className="alert alert-warning">No Data Found</div>
        ) : null}
        {loading ? (
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        ) : null}
      </>
      {currentProcessed?.isProcessed == 0 ? (
        <div className="alert alert-warning">{currentProcessed?.message}</div>
      ) : null}
    </>
  );
}

async function getResult(
  setOldData,
  setUser,
  dispatch,
  prn,
  setLoading,
  instCode
) {
  setLoading(true);

  await API.get("/report/getStudentResult", {
    params: { prn: prn, inst_code: instCode },
  })
    .then(function (res) {
      if (res.data.status === "success") {
        setOldData(res.data?.data?.previousResultData);
        setUser(res.data?.data);
        setLoading(false);
      }
    })
    .catch(function (error) {
      dispatch(
        show({
          message: error.response.data.message,
          displayClass: "alert-danger",
        })
      );
      setLoading(false);
    });
}

async function checkCurrentResultProcessed(dispatch, prn, setCurrentProcessed) {
  await API.post("/result/regular/isProcessed", { prn: prn })
    .then(function (res) {
      if (res.data.status === "success") {
        setCurrentProcessed({
          isProcessed: res.data.data.isRegularResultProcessed,
          message: res.data.message,
        });
      }
    })
    .catch(function (error) {
      dispatch(
        show({
          message: error.response.data.message,
          displayClass: "alert-danger",
        })
      );
    });
}
export default ResultTimeLine;
