import React, { useState } from 'react';

const CandidateInfo = () => {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState([]);
  const [DataResult, setDataResult] = useState([]);
  const [DataStatus, setDataStatus] = useState(false);





  const testArr = {
    "CurrentSemester": [
      {
        "id": 21921,
        "prn": "2121311242040",
        "marksheet_fullname": "BELE SARANG SANJAY",
        "courseId": 11242,
        "program_type": 1,
        "user": {
          "id": 24571,
          "username": "2121311242040",
          "prn": "2121311242040",
          "resetPassword": 0,
          "courseId": 11242,
          "instituteId": 100,
          "name": "BELE SARANG SANJAY",
          "first_name": "",
          "middle_name": "Sanjay",
          "last_name": "",
          "dob": null,
          "email": "sarangbele5@gmail.com",
          "gender": 1,
          "mobile": "9307418182",
          "updated_at": "2023-02-13T16:29:46.000000Z",
          "institute": {
            "id": 100,
            "username": "2131",
            "applicationId": null,
            "name": "Shree Tuljabhavani College of Engineering, Tuljapur",
          }
        },
        "course": {
          "id": 11242,
          "name": "Bachelor of Technology (Computer Science and Engineering)"
        },
        "department": {
          "id": 1,
          "name": "Bachelor of Technology"
        }
      }
    ],
    "candidate": [
      {
        "id": 21921,
        "prn": "2121311242040",
        "marksheet_fullname": "BELE SARANG SANJAY",
        "courseId": 11242,
        "program_type": 1,
        "user": {
          "id": 24571,
          "username": "2121311242040",
          "prn": "2121311242040",
          "resetPassword": 0,
          "courseId": 11242,
          "instituteId": 100,
          "name": "BELE SARANG SANJAY",
          "first_name": "",
          "middle_name": "Sanjay",
          "last_name": "",
          "dob": null,
          "email": "sarangbele5@gmail.com",
          "gender": 1,
          "mobile": "9307418182",
          "updated_at": "2023-02-13T16:29:46.000000Z",
          "institute": {
            "id": 100,
            "username": "2131",
            "applicationId": null,
            "name": "Shree Tuljabhavani College of Engineering, Tuljapur",
          }
        },
        "course": {
          "id": 11242,
          "name": "Bachelor of Technology (Computer Science and Engineering)"
        },
        "department": {
          "id": 1,
          "name": "Bachelor of Technology"
        }
      }
    ],
    "previousResultData": [
      {
        "candidate": {
          "id": 21921,
          "prn": "2121311242040",
          "abc_id": 764429774653,
          "nad_id": null,
          "isDSY": 0,
          "photoPath": "https://dbatuerp.com/data/documents/candidate/21921/Photo_21921_1.jpg",
          "signiturePath": "https://dbatuerp.com/data/documents/candidate/21921/Sign_21921_1.jpg",
          "mobile": "9307418182",
          "email": "sarangbele5@gmail.com",
        },
        "sem": 2,
        "year": 1,
        "sub": [
          {
            "id": 7563892,
            "ExamSeason": "Revaluation Summer Semester Examinations 2022",
            "exam_season_id": 69,
            "CourseCode": "11242",
            "Program": "BTECH_SEM2B#2020",
            "sem": 2,
            "subject_info": {
              "id": 8408,
              "department": "B_TECH",
              "dept_id": 1,
              "totalMX": 100
            }
          },
          {
            "id": 7563893,
            "ExamSeason": "Revaluation Summer Semester Examinations 2022",
            "exam_season_id": 69,
            "CourseCode": "11242",
            "Program": "BTECH_SEM2B#2020",
            "sem": 2,
            "subject_info": {
              "id": 8408,
              "department": "B_TECH",
              "dept_id": 1,
              "totalMX": 100
            }
          },

        ],
        "CurrentSemester": [],
        "Cumulative": []
      },

    ]
  }



  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = async () => {
    console.log('Input Value:', inputValue);
    // Perform any additional logic with the input value
    console.log(testArr)
    // 2121311242020
    // 2221311242525
    const token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYTQ0YmEzZTA1OGU2YzNjZGYyNDIxMzgzMDAwYzllMTE3OTczZDgwZmExZmIxYmM1MzdhNGYxNmUxZGI1ZDhiZTEyNTQwZjgzOGUxZjZkYjYiLCJpYXQiOjE2ODI1NzY2MDYuNDIwNTM5LCJuYmYiOjE2ODI1NzY2MDYuNDIwNTQxLCJleHAiOjE3MTQxOTkwMDYuNDE0MzY3LCJzdWIiOiIxMTM5OTEiLCJzY29wZXMiOltdfQ.JvU6CpeaJwhPCeQ7cskFmCwVsO-HWixbQn-SrXKE1v8dnY2B3Nseu0SNSuVQ9o1WGLemu9ARFndaMT1jJKyv04FMBYBqPf2vnkggrOa01CzkNUumbZ0icmbZgQo6HbfITURWLMgpQ3WWUEcXacOTUBM9MASieHmBlaJG9WWsEnKIzvNbZbJR1zv5jw2p1WiVHugvB3-FHR-irC6NaMgaChbIy0gzqUsgRmSrCo-B9rB3L3lmmy7B7gt2E9Cs7nAYNK0Bof9qfwVPATspJoTL1SMWadfRVXotDdY2KgZVEvM8wnGj-ox8zTRsz40n9FO7dB522VDIRpQuZcOCtUQKgFzhHsEnB8k261Jw_HfIT5kVfP3fuZ3rO2mj90uZ-2Xr9vM2BeCM7LLoaw80tN30Jv_MiC_hqu0J3z_lY5MS5A53z_2raAJ1Qk1bhFcWrcKSsbfPNyQu6zmkPlzFNIcoZGVz7ssMEjYrUZNybxV4BHeYjOZIExe0ErxcmQAc7mSkpFuecUHSb4B2BuRhnJSHHBRrXWlzZc28cKrK-kFUKZCXOcPMWxoLeJ-JmLMyTAZ7qkUjt_rXvYmAn1GaIS4Wsdh2L6BtakOuiIWc0uJp1Jar8HFPBS6FQSiQF2gLtjVPW_fvYHZsAAIxNtYR358iJbk7w3DyCvT7-8eltraPgn4';
    // const url = 'https://api.onwajooba.com/plugin/events';

    const url = `https://dbatuerp.com/api/abc_id?username=${inputValue}`;
    const getResultUrl = `https://dbatuerp.com/api/report/getStudentResult?prn=${inputValue}`
    // Set up the headers object with authorization and content type headers
    const myHeaders = new Headers({
      'Authorization': token,
      'Content-Type': 'multipart/form-data'
    });

    try {
      // Make the API request using fetch() with the specified URL and headers
      const response = await fetch(url, {
        method: 'GET',
        headers: myHeaders
      });

      // Check if the response is OK (status code between 200 and 299)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // If the response is OK, parse the response body as JSON data
      const data = await response.json();
      console.log(data.length)
      setData(data)

      const response1 = await fetch(getResultUrl, {
        method: 'GET',
        headers: myHeaders
      });

      // Check if the response1 is OK (status code between 200 and 299)
      if (!response1.ok) {
        throw new Error('Network response1 was not ok');
      }

      // If the response1 is OK, parse the response1 body as JSON data
      const data1 = await response1.json();
      console.log(data1)
      setDataStatus(data1.status)
      setDataResult(data1)
      console.log(data1)

    } catch (error) {
      // If an error occurs, log it to the console
      console.error('Error:', error);
    }

  };

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoic2h1YmhhbS5jb252ZXJzYW50QGdtYWlsLmNvbSIsInVzZXJJZCI6MX0sImlhdCI6MTY4MjY3ODI5OSwiZXhwIjoxNjgyOTc4Mjk5fQ.c7X2kMMHlbcLRxQ-siCbHzbM_avSu1_w-PDDsgRLNsE";



  return (
    <>
    <div className="container">
      <h2 className="title">Candidate Information</h2>



      {DataStatus==="success" && (
        <div>
          {/* Displaying candidate data */}
         
          {DataResult['data'].candidate.map((candidate, index) => (
            <div key={index}>
              <h2>Candidate Details</h2>
              <p>ID: {candidate.id}</p>
              <p>PRN: {candidate.prn}</p>
              <p>Name: {candidate.marksheet_fullname}</p>
              <p>Course: {candidate.course.name}</p>
              <p>Department: {candidate.department.name}</p>
            </div>
          ))}

          {/* Displaying previous result data */}
          
          {DataResult['data'].previousResultData.map((result, index) => (
            <div key={index}>
              <h2>Previous Result</h2>
              <p>Semester: {result.sem}</p>
              <p>Year: {result.year}</p>

              <h3>Subjects</h3>
              {result.sub.map((subject, subIndex) => (
                <div key={subIndex}>
                  {/* <p>Subject ID: {subject.id}</p> */}
                  <p>Exam Season: {subject.ExamSeason}</p>
                  <p>Course Code: {subject.CourseCode}</p>
                  <p>Result: {subject.Result}</p>

                  <p>GradePoints: {subject.GradePoints}</p>
                  <p>InternalPracticalMarks: {subject.InternalPracticalMarks}</p>
                  <p>MidExamMarks: {subject.MidExamMarks}</p>
                  <p>Outof100Marks: {subject.Outof100Marks}</p>
                  <p>PracticalMarks: {subject.PracticalMarks}</p>
                  <p>subject_name: {subject.subject_info.subject_name}</p>
                  
                  <p>totalMX: {subject.subject_info.totalMX}</p>
                  <p>total_credit: {subject.subject_info.total_credit}</p>
                  <p>CA1MX: {subject.subject_info.CA1MX}</p>
                  <p>CA2MX: {subject.subject_info.CA2MX}</p>
                  <p>ETEMX: {subject.subject_info.ETEMX}</p>
                  <p>IPRMX: {subject.subject_info.IPRMX}</p>


                  <p>Result: {subject.Result}</p>

                  {/* <p>Program: {subject.Program}</p> */}
                  <p>Semester: {subject.sem}</p>
                  {/* <p>Department: {subject.subject_info.department}</p> */}
                  {/* <p>Department ID: {subject.subject_info.dept_id}</p> */}
                  <p>Total Marks: {subject.subject_info.totalMX}</p>
                  <br></br>
                </div>
              ))}

              <h3>Current Semester</h3>
              {/* {result.CurrentSemester.map((semesterData, semesterIndex) => (
                <div key={semesterIndex}>
                </div>
              ))} */}

              <h3>Cumulative</h3>
              {/* {result.Cumulative.map((cumulativeData, cumulativeIndex) => (
                <div key={cumulativeIndex}>
                </div>
              ))} */}
            </div>
          ))}
        </div>
      )}

      <div className="content">
        <p className="status">Status: {data.status}</p>
        <p className="message">Message: {data.message}</p>
      </div>

      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleClick}>Get Information</button>

      {data.status === 'success' && (
        <div>
          <h3 className="details-title">Candidate Details</h3>
          <div className="details-content">
            <div className="info-group">
              <p>ID: {data.data.id}</p>
              <p>PRN: {data.data.prn}</p>
              <p>ABC ID: {data.data.abc_id}</p>
              <p>Mobile: {data.data.mobile}</p>
              <p>Email: {data.data.email}</p>
              <p>First Name: {data.data.first_name}</p>
              <p>Middle Name: {data.data.middle_name}</p>
              <p>Last Name: {data.data.last_name}</p>
              <p>Gender: {data.data.gender === 1 ? 'Male' : 'Female'}</p>
              <p>Course: {data.data.course.name}</p>
              <p>Department: {data.data.dept.name}</p>
            </div>

            {data.data.photoPath && (
              <div className="image-group">
                <h3>Photo</h3>
                <img className="photo" src={data.data.photoPath} alt="Candidate's photo" />
              </div>
            )}

            {data.data.signiturePath && (
              <div className="image-group">
                <h3>Signature</h3>
                <img className="signature" src={data.data.signiturePath} alt="Candidate's signature" />
              </div>
            )}
          </div>
          <p className="other-details">...other details...</p>





        </div>
      )}

     

    </div>

    </>
  );
};

export default CandidateInfo;
