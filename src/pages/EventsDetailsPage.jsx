import React from "react";
import BookmarkIcon from "../assets/bookmark.svg";
import Bookmark2Icon from "../assets/bookmark_added.svg";
import Usericon from "../assets/Usericon.png";
import Comment from "../assets/comment.svg";

import { Stars } from "../components/EventDetailPage/GenStars";
import { IconButton } from "../components/EventDetailPage/IconButton";
import { Button } from "../components/EventDetailPage/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { extractDateTime } from "../components/EventDetailPage/utils";
import { SharePopUp } from "../components/EventDetailPage/SharePopUp";

const ChevronLeft = () => <div className="icon-chevron-left" />;
const ChevronRight = () => <div className="icon-chevron-right" />;

export default function EventDetailsPage({ id }) {
  const request_url =
    import.meta.env.VITE_BACKEND_URL + "event/viewEvent/" + id;
  const navigate = useNavigate();

  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(request_url);
  useEffect(() => {
    setLoading(true);
    axios
      .get(request_url)
      .then((res) => {
        if (res.data.success) {
          setEvent(res.data.data);
        } else {
          navigate("/events");
        }
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [request_url, navigate]);

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen justify-center items-center">
        <p className="text-lg font-psans">Loading event details...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <main className="flex-1 container mx-auto p-4 max-w">
        {/* Navigation Buttons */}
        <div className="flex justify-end mb-4">
          <SharePopUp link={"Link here"} />
        </div>

        <div className="border border-stroke-blue rounded bg-gray-bg p-4 px-7">
          <div className="flex items-center">
            {/* Event Image */}
            <div className="bg-bright-blue border-1  border-alpha-border w-3/5 rounded-lg aspect-video mb-4">
              {console.log(event.bannerUrl)}
              <img
                src={event.bannerUrl}
                alt={`${event.title || "Event"} banner`}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mb-4 pl-5 w-2/5 h-max">
              {/* Rating */}

              <div className="flex items-center my-4 w-full sm:w-3/4">
                <div className="flex rounded-full bg-bright-blue items-center justify-between w-full px-3 py-1">
                  <Stars count={5} />
                  <div className="mx-1 h-8 min-h-full w-1 bg-white rounded-full"></div>
                  <div className="flex items-center justify-center px-1">
                    <span className="font-inter font-bold text-2xl text-white">
                      5.0
                    </span>
                  </div>
                </div>
              </div>

              {/* Event Details */}
              <div className="font-psans font-bold">
                <h1 className="text-3xl  mb-2 py-5">
                  {event.title || "Event Title"}
                </h1>
                <p className="text-lg mb-1">
                  Date: {extractDateTime(event.eventDate).date}
                </p>
                <p className=" mb-1">
                  Time: {extractDateTime(event.startTime).time}
                </p>
                <p className="mb-4">Venue: {event.venue}</p>
              </div>
            </div>
          </div>
          {/* Event Description */}
          <div className="mb-4 font-psans">
            <div className="flex items-center gap-0.5 mb-2">
              <h2 className=" font-bold text-xl">Event Description</h2>
              <img src={BookmarkIcon} alt="Bookmark icon" className="h-7" />
            </div>
            <p className="text-md mb-4">{event.description}</p>
          </div>

          {/* Register Button */}
          <div className="mb-6">
            <IconButton
              content={"Register Now"}
              icon={Bookmark2Icon}
              iconName={"Bookmark Read Icon"}
              modifier={"h-7"}
            ></IconButton>
          </div>

          {/* Feedback Showcase */}
          <div className="mb-6">
            <h2 className="font-psans font-bold text-xl mb-4">
              Feedback Showcase:
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((feedback) => (
                <div
                  key={feedback}
                  className="bg-card-blue rounded-lg px-2 shadow-sm"
                >
                  <div className="flex items-center gap-2 h-20">
                    <img
                      src={Usericon}
                      alt="User icon"
                      className="h-7/10 rounded-full"
                    />
                    <div className="flex flex-col">
                      <p className="font-psans font-bold text-xs text-gray-900">
                        @Alex
                      </p>
                      <p className="font-psans text-sm text-gray-700 mb-1">
                        {'"Great speakers and insightful sessions"'}
                      </p>
                      <div className="flex items-center w-20">
                        <Stars count={4} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Provide Feedback Button */}
          <IconButton
            content={"Provide Your Feedback"}
            icon={Comment}
            iconName={"CommentIcon"}
            modifier={"h-6"}
          ></IconButton>
        </div>
      </main>
    </div>
  );
}
