import React from 'react'
import styles from './ProjectsStyles.module.css';
import SkyCast from '../../assets/SkyCast.png';
import AirCursor from '../../assets/AirCursor.png';
import NMIETPlus from '../../assets/NMIETPlus.png';
import Sagar from '../../assets/Sagar.png'
import Copyright from '../../assets/Copyright.pdf'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
  
        <section id='Projects' className={styles.container}>
    
    
    
            <h1 className='sectionTitle'>Projects</h1>
            <div className={styles.projectContainer}>

                <ProjectCard 
                    src={SkyCast} 
                    link='https://github.com/sagarbhoge2003/WeatherApp' 
                    h3='SkyCast' 
                    p='Weather-App'
                />

                <ProjectCard 
                    src={AirCursor} 
                    link={Copyright} 
                    h3='AirCursor' 
                    p='Copyright-Project'
                />

                <ProjectCard    
                    src={NMIETPlus} 
                    link='https://github.com/sagarbhoge2003/NMIET-website-clone-' 
                    h3='NMIETPlus' 
                    p='College Website-Clone'
                />
                <ProjectCard    
                    src={Sagar} 
                    link='https://github.com/sagarbhoge2003/Sagar-Portfolio' 
                    h3='Sagar' 
                    p='Portfolio Website'
                />
                  
            </div>    
        </section>
    );
}

export default Projects
