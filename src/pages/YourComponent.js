import React, { useEffect, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ringtone from '../assets/notification/noti1.mp3';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';


const YourComponent = () => {
    const [columnData, setColumnData] = useState(4);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio(ringtone));

    const showNotification = () => {
        NotificationManager.info('Hello!', 'This is a desktop notification.', 3000, () => {
          console.log('Notification clicked');
        });
      };
      
    // const handleButtonClick = () => {
    //     toast.success('You have new notification!', { position: toast.POSITION.TOP_RIGHT });
    // };

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        // toast.success('You have new notification!', { position: toast.POSITION.TOP_RIGHT });

        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:9000/masters/package'); // Replace with the actual API endpoint
                const data = await response.json();
                // console.log(data.totalItems+">"+columnData)
                const NotiCount = sessionStorage.getItem('count');
                console.log(NotiCount)
                // alert("you have new notification")
                if (data.totalItems > NotiCount) {
                    togglePlay()
                    showNotification()
                    // toast.success('You have new notification!', { position: toast.POSITION.TOP_RIGHT });
                    // toast.success('You have new notification!', {
                    //     position: toast.POSITION.TOP_RIGHT,
                    // });

                    sessionStorage.setItem('count', data.totalItems);
                }
                setColumnData(data.totalItems); // Update the component state with the retrieved data
                sessionStorage.setItem('count', data.totalItems);


            } catch (error) {
                console.error('Error fetching column data:', error);
            }
        };

        const interval = setInterval(fetchData, 1000); // Schedule the task to run every second

        return () => {
            clearInterval(interval); // Clean up the interval on component unmount
        };
    }, []);

    return (
        <div>
            {columnData ? (
                <>
                    <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
                    <NotificationContainer />

                    <p>Column value: {columnData}</p>
                    <button onClick={showNotification}>Show Notification</button>

                    {/* <button onClick={handleButtonClick}>Show Notification</button> */}
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default YourComponent
