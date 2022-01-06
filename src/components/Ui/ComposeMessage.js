import React, { useState, useEffect } from "react";
import Input from "./Input";
import classes from "./ComposeMessage.module.css";
import ProfileImg from "../../assets/images/dummy-profile-pic-female.jpg";
import gifImg from "../../assets/images/gif.png"
import tagFriend from '../../assets/images/tag.png'
import checkIn from '../../assets/images/placeholder.png'
import tagEvent from '../../assets/images/planner.png'

const ComposeMessage = () => {
  const [message, setMessage] = useState("");
  const [modal, setModal] = useState(false);
  const [data, setData] = useState("");
  const [showGif, setGif] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = { api_key: "RJct8go2KVY7Yqj5Gl8bRTEsGpNtbPsr" };

      await fetch(
        `https://api.giphy.com/v1/gifs/trending?api_key=${encodeURIComponent(
          data.api_key
        )}`
      )
        .then((response) => response.json())
        .then((data) => setData(data.data));
    };
    fetchData();
  }, []);
  // console.log(data)
  const handleInput = (e) => {
    setMessage(e.target.value);
  };

  const handleModal = () => {
    setModal(!modal);
  };
  const handleSearchGif =  async(e) => {
    const data = { api_key: "RJct8go2KVY7Yqj5Gl8bRTEsGpNtbPsr",q: e.target.value,limit: 15 };
    await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${encodeURIComponent(
        data.api_key 
      )}&q=${encodeURIComponent(data.q)}&limit=${encodeURIComponent(data.limit)}`
    )
      .then((response) => response.json())
      .then((data) => setData(data.data));
  };

  const handleSelectGif = (data) => {
    // console.log("click", e)
    setGif(data?.images?.fixed_height?.url);
    setModal(!modal)
  };
  return (
    <>
      <div className={classes.message_area}>
        <img className={classes.profile_image} src={ProfileImg} />
        <Input
          value={message}
          onChange={handleInput}
          input={{ type: "text", placeholder: "Write Something..." }}
        />
      </div>
      <div className={classes.showgig}>
        <img src={showGif} />
      </div>
      <div className={classes.tabs}>
        <div><img src={tagFriend} />Tag Friends</div>
        <div><img src={checkIn}/>Check In</div>
        <div onClick={handleModal}><img src={gifImg}/>GIF</div>
        <div><img src={tagEvent}/>Tag Event</div>
      </div>

      {modal && (
        <div className={classes.modal}>
          <Input
            onChange={handleSearchGif}
            input={{ type: "text", placeholder: "Search for gif..." }}
          />
          {data.map((data) => (
            <div key={data?.id} onClick={() => handleSelectGif(data)}>
              <img src={data?.images?.fixed_height?.url} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ComposeMessage;
