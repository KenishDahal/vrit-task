import React, { useState } from "react";
import "./search.css";

const lists = [
  {
    id: 0,
    Ticketdetails: "Song",
    TicketdetailsUpdate: "Updated 2 day ago",
    Customername: "Luis Cruise",
  },
  {
    id: 1,
    Ticketdetails: "Dance",
    TicketdetailsUpdate: "Updated 1 day ago",
    Customername: "Shawn Damon",
  },
  {
    id: 2,
    Ticketdetails: "Theatre",
    TicketdetailsUpdate: "Updated 1 day ago",
    Customername: "Nikhil Upreti",
  },
  {
    id: 3,
    Ticketdetails: "Theatre",
    TicketdetailsUpdate: "Updated 2 day ago",
    Customername: "Bill gates",
  },
  {
    id: 4,
    Ticketdetails: "Theatre",
    TicketdetailsUpdate: "Updated 1 day ago",
    Customername: "Biston Cavil",
  },
  {
    id: 5,
    Ticketdetails: "Movie",
    TicketdetailsUpdate: "Updated 1 day ago",
    Customername: "Chris Evans",
  },
  {
    id: 6,
    Ticketdetails: "Theatre",
    TicketdetailsUpdate: "Updated 4 day ago",
    Customername: "Sam Smith",
  },
  {
    id: 7,
    Ticketdetails: "Movie",
    TicketdetailsUpdate: "Updated 6 day ago",
    Customername: "Steve Rogers",
  },
];

const tableName = [
  "Ticket details",
  "Customer name",
  "Ticket details update",
  "",
];

const SearchFilter = () => {
  let [usersDetail, setUsersDetail] = useState(lists);

  // search query
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="main">
      <div className="search">
        <div className="h1">VRIT</div>
        <div className="search__input">
          <div className="h2">Search Lists</div>
          <div className="">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* table */}
      <table>
        <tr className="">
          {Object.values(tableName).map((value, index) => (
            <th className="" key={index}>
              {value}
            </th>
          ))}
        </tr>

        {/* Display the filtered list */}
        {usersDetail &&
          usersDetail
            .filter((list) => {
              return searchQuery.toLowerCase() === ""
                ? list
                : list.Ticketdetails.toLowerCase().includes(
                    searchQuery.toLowerCase()
                  );
            })
            .map((item, index) => (
              <tr className="list" key={index}>
                <td>{item.Ticketdetails}</td>
                <td>{item.Customername}</td>
                <td>{item.TicketdetailsUpdate}</td>
                <td></td>
              </tr>
            ))}
      </table>
    </div>
  );
};

export default SearchFilter;
