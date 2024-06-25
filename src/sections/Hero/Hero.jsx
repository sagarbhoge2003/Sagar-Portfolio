import styles from './HeroStyles.module.css'
import herolog from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import instagramLight from '../../assets/instagram.svg'
import instagramDark from '../../assets/instagram.svg'
import linkedinLight from '../../assets/linkedIn.svg'
import linkedinDark from '../../assets/linkedIn.svg'
import githubLight from '../../assets/github.svg'
import githubDark from '../../assets/github.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'
function Hero() {
    const { theme, toggleTheme } = useTheme();
    
    const themeIcon = theme === 'light' ? sun : moon; 
    const InstagramIcon = theme === 'light' ? instagramLight : instagramDark;
    const LinkedInIcon = theme === 'light' ? linkedinLight : linkedinDark;
    const GitHubIcon = theme === 'light' ? githubLight : githubDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img 
        className={styles.hero}
        src={herolog} 
        alt='Profile Picture of Sagar Bhoge'/>
        <img 
        className={styles.colorMode}
        src={themeIcon} 
        alt='color mode icon'
        onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>Sagar
            <br/>
         Bhoge
        </h1>
        <h2>
            Full Stack Developer
        </h2>
        <span>
            <a href="https://instagram.com/sagar_v._bhoge" target='blank'>
                <img src={InstagramIcon} alt='Instagram.icon'></img>
            </a>
            <a href="https://linkedin.com/in/sagar-vaijinath-bhoge" target='blank'>
                <img src={LinkedInIcon} alt='LinkedIn.icon'></img>
            </a>
            <a href="https://github.com/sagarbhoge2003" target='blank'>
                <img src={GitHubIcon} alt='Github.icon'></img>
            </a>
        </span>
        <p className={styles.description}>With a passion for developing modern Web apps & always try to do something new...</p>
        <a href={CV} download>
            <button className='hover'>Resume</button>
        </a>

      </div>
    </section>
  )
}

export default Hero
