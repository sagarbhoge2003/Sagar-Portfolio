import styles from './SkillsStyles.module.css';
import HTML from '../../assets/html-5.png'
import CSS from '../../assets/css-3.png'
import JavaScript from '../../assets/js.png'
import Java from '../../assets/java.png'
import Python from '../../assets/python.png'
import CPP from '../../assets/c-.png'
import react from '../../assets/reactjs.png'
import Bootstrap from '../../assets/boot.png'
import Django from '../../assets/django.png'
import Docker from '../../assets/docker.png'
import MySql from '../../assets/sql-server.png'
import Hadoop from '../../assets/hadoop.png'
import Git from '../../assets/git1.png'
import MongoDB from '../../assets/mongodb.png'
import Linux from '../../assets/linux.png'

import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();


  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={HTML} skill="HTML" />
        <SkillList src={CSS} skill="CSS" />
        <SkillList src={JavaScript} skill="JavaScript" />
        <SkillList src={Java} skill="Java" />
        <SkillList src={Python} skill="Python"/>
        <SkillList src={CPP} skill="C++"/>
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={react} skill="React" />
        <SkillList src={Bootstrap} skill="Bootstrap"/>
        <SkillList src={Django} skill="Django" />
        <SkillList src={Docker} skill="Docker" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={MySql} skill="MySql" />
        <SkillList src={Hadoop} skill="Hadoop" />
        <SkillList src={Git} skill="Git" />
        <SkillList src={MongoDB} skill="MongoDB" />
        <SkillList src={Linux} skill="Linux" />
      </div>
    </section>
  );
}

export default Skills;
