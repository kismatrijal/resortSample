import React, { Component } from 'react';
import Title from './Title';
import {FaCocktail, FaHiking, FaShuttleVan} from "react-icons/fa";
import{MdEventSeat} from "react-icons/md";

class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"free cocktails",
                info:'Some basic liquors include gin, rum, bourbon, brandy, whiskey, Cointreau, dry and sweet vermouth, tequila, Kahlua, scotch, and vodka. To expand your drink selection, consider buying a nice cognac and a couple of cordials such as Amaretto, Grand Marnier, Pernod, and triple sec.'
            },
            {
                icon:<FaHiking/>,
                title:"Endless hiking",
                info:'The sunrise view is spectacular. You then go onto have a nice breakfast at a nearby hotel and go on to the hike. I would recommend this hike to get a taste of the '
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free Shuttle",
                info:' The benefit to staying at a hotel close to the airport is that you can take a shuttle, or a regular bus that travels back and forth, to catch your plane in the morning.'
            },
            {
                icon:<MdEventSeat/>,
                title:"Confrence and Event",
                info:' Whether a corporate conference, convention or a lavish banquet, our team is on hand to help you create a uniquely tailored event to suit your needs.'
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                    {this.state.services.map((item,index)=>{
                        return (
                            <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title} </h6>
                            <p>{item.info}</p>
                            </article>
                        );
                    })}
                </div>
            </section>
        );
    }
}

export default Services;