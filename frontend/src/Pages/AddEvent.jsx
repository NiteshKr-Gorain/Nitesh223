import React, { useState } from "react";
import Navbar from "./Navbar";

const AddEvent = () => {
    const [event, setEvent] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [message, setMessage] = useState("");

    const addEvent = (e) => {
        e.preventDefault();

        fetch("http://localhost:3000/addevent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                event: event,
                location: location,
                date: date,
                description: description
            })
        })
            .then((response) => response.json())
            .then((data) => {
                setMessage(data.message);

                if (data.success) {
                    setEvent("");
                    setLocation("");
                    setDate("");
                    setDescription("");
                }
            })
            .catch((error) => {
                console.log(error);
                setMessage("Something went wrong");
            });
    };

    return (
        <div>
            <Navbar />

            <h1>Add Event</h1>

            <form onSubmit={addEvent}>
                <label>Event</label>
                <input
                    type="text"
                    value={event}
                    onChange={(e) => setEvent(e.target.value)}
                    placeholder="Enter event"
                />
                <br />
                <label>Location</label>
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter location"
                />

                <br />
                <label>Date</label>
                <input
                    type="text"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="Enter date"
                />

                <br />
                <label>Description</label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter description"
                />

                <br />

                <button type="submit">Add Event</button>

            </form>

            <p>{message}</p>
        </div>
    );
};

export default AddEvent;