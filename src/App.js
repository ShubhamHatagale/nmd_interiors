import React, { useEffect, useState } from 'react'
import Routes from './MainRoutes'
import './App.css';
import YourComponent from './pages/YourComponent'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CandidateInfo from './pages/CandidateInfo';
import Resume from './pages/Resume';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // const token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYTQ0YmEzZTA1OGU2YzNjZGYyNDIxMzgzMDAwYzllMTE3OTczZDgwZmExZmIxYmM1MzdhNGYxNmUxZGI1ZDhiZTEyNTQwZjgzOGUxZjZkYjYiLCJpYXQiOjE2ODI1NzY2MDYuNDIwNTM5LCJuYmYiOjE2ODI1NzY2MDYuNDIwNTQxLCJleHAiOjE3MTQxOTkwMDYuNDE0MzY3LCJzdWIiOiIxMTM5OTEiLCJzY29wZXMiOltdfQ.JvU6CpeaJwhPCeQ7cskFmCwVsO-HWixbQn-SrXKE1v8dnY2B3Nseu0SNSuVQ9o1WGLemu9ARFndaMT1jJKyv04FMBYBqPf2vnkggrOa01CzkNUumbZ0icmbZgQo6HbfITURWLMgpQ3WWUEcXacOTUBM9MASieHmBlaJG9WWsEnKIzvNbZbJR1zv5jw2p1WiVHugvB3-FHR-irC6NaMgaChbIy0gzqUsgRmSrCo-B9rB3L3lmmy7B7gt2E9Cs7nAYNK0Bof9qfwVPATspJoTL1SMWadfRVXotDdY2KgZVEvM8wnGj-ox8zTRsz40n9FO7dB522VDIRpQuZcOCtUQKgFzhHsEnB8k261Jw_HfIT5kVfP3fuZ3rO2mj90uZ-2Xr9vM2BeCM7LLoaw80tN30Jv_MiC_hqu0J3z_lY5MS5A53z_2raAJ1Qk1bhFcWrcKSsbfPNyQu6zmkPlzFNIcoZGVz7ssMEjYrUZNybxV4BHeYjOZIExe0ErxcmQAc7mSkpFuecUHSb4B2BuRhnJSHHBRrXWlzZc28cKrK-kFUKZCXOcPMWxoLeJ-JmLMyTAZ7qkUjt_rXvYmAn1GaIS4Wsdh2L6BtakOuiIWc0uJp1Jar8HFPBS6FQSiQF2gLtjVPW_fvYHZsAAIxNtYR358iJbk7w3DyCvT7-8eltraPgn4`;
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoic2h1YmhhbS5jb252ZXJzYW50QGdtYWlsLmNvbSIsInVzZXJJZCI6MX0sImlhdCI6MTY4MjY3ODI5OSwiZXhwIjoxNjgyOTc4Mjk5fQ.c7X2kMMHlbcLRxQ-siCbHzbM_avSu1_w-PDDsgRLNsE";

    async function wajooba_events_function() {

      const token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYTQ0YmEzZTA1OGU2YzNjZGYyNDIxMzgzMDAwYzllMTE3OTczZDgwZmExZmIxYmM1MzdhNGYxNmUxZGI1ZDhiZTEyNTQwZjgzOGUxZjZkYjYiLCJpYXQiOjE2ODI1NzY2MDYuNDIwNTM5LCJuYmYiOjE2ODI1NzY2MDYuNDIwNTQxLCJleHAiOjE3MTQxOTkwMDYuNDE0MzY3LCJzdWIiOiIxMTM5OTEiLCJzY29wZXMiOltdfQ.JvU6CpeaJwhPCeQ7cskFmCwVsO-HWixbQn-SrXKE1v8dnY2B3Nseu0SNSuVQ9o1WGLemu9ARFndaMT1jJKyv04FMBYBqPf2vnkggrOa01CzkNUumbZ0icmbZgQo6HbfITURWLMgpQ3WWUEcXacOTUBM9MASieHmBlaJG9WWsEnKIzvNbZbJR1zv5jw2p1WiVHugvB3-FHR-irC6NaMgaChbIy0gzqUsgRmSrCo-B9rB3L3lmmy7B7gt2E9Cs7nAYNK0Bof9qfwVPATspJoTL1SMWadfRVXotDdY2KgZVEvM8wnGj-ox8zTRsz40n9FO7dB522VDIRpQuZcOCtUQKgFzhHsEnB8k261Jw_HfIT5kVfP3fuZ3rO2mj90uZ-2Xr9vM2BeCM7LLoaw80tN30Jv_MiC_hqu0J3z_lY5MS5A53z_2raAJ1Qk1bhFcWrcKSsbfPNyQu6zmkPlzFNIcoZGVz7ssMEjYrUZNybxV4BHeYjOZIExe0ErxcmQAc7mSkpFuecUHSb4B2BuRhnJSHHBRrXWlzZc28cKrK-kFUKZCXOcPMWxoLeJ-JmLMyTAZ7qkUjt_rXvYmAn1GaIS4Wsdh2L6BtakOuiIWc0uJp1Jar8HFPBS6FQSiQF2gLtjVPW_fvYHZsAAIxNtYR358iJbk7w3DyCvT7-8eltraPgn4';
      // const url = 'https://api.onwajooba.com/plugin/events';
      const url = 'https://dbatuerp.com/api/abc_id?username=2221311242503';

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
      } catch (error) {
        // If an error occurs, log it to the console
        console.error('Error:', error);
      }
    }

    wajooba_events_function()

  }, []);


  return (
    <>
      {/* <YourComponent />

        <ToastContainer /> */}

      <CandidateInfo  />
      {/* <Resume  /> */}

      {/* <div>
        {data ? (
          <CandidateInfo data={data} />
        ) : (
          <p>Loading candidate information...</p>
        )}
      </div> */}


    </>

  )
}

export default App