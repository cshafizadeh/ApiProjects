import React from 'react';
import Footer from './footer/footer';
import './main.css';
import { projectData } from './projectData';

export default function Main() {
    return (
        <div id='main'>
            <div className='mainHeader'>
                <h1>API Programs</h1>
                <h3>Created by Cyrus Shafizadeh</h3>
            </div>
            <main className='mainContent'>
            {projectData.map((data, key) => {
                return (
                    <div className='projectContainer' key={key}>
                        <div className='projectImgContainer'>
                            <img src={data.img} alt='stock'/>
                        </div>
                        <div className='projectTitle'>
                            <h2>{data.title}</h2>
                        </div>
                        <div className='projectDescription'>
                            <p>{data.description}</p>
                        </div>
                        <a href={data.link}>Link</a>
                    </div>
                );
            })}
            </main>
            <Footer />
        </div>
    )
}