import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Home = () => {
    const [events, setEvents] = useState([]);
    const [search, setSearch] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");

    useEffect(() => {
        fetch("http://localhost:3000/events")
            .then((response) => response.json())
            .then((data) => {
                setEvents(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

     useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(search);
        }, 500);

        return () => clearTimeout(timer);
    }, [search]);
    const filteredEvents = events.filter((event) =>
        event.event.toLowerCase().includes(search.toLowerCase())
    );
    

    return (
        <div>
            <Navbar />

            <h1>Welcome to Home Page</h1>

            <input
                type="text"
                placeholder="Search Event"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <h2>Events</h2>

            {filteredEvents.length === 0 ? (
                <p>No events found</p>
            ) : (
                filteredEvents.map((event) => (
                    <div key={event.id}>
                        <h3>ID: {event.id}</h3>
                        <p>Event: {event.event}</p>
                        <p>Location: {event.location}</p>
                        <p>Date: {event.date}</p>
                        <p>Description: {event.description}</p>
                        <hr />
                    </div>
                ))
            )}
        </div>
    );
};

export default Home;