// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="JD" />

            <div className='header__content'>
                <h1>Hi, I'm jdog</h1>
                <p>Aspiring Web3 developer currently working on a Web3 portfolio site.</p>
                <a href="https://non-fungi.com/contact/" target="_blank"><button className='button'>Get In Touch</button></a>
            </div>
        </section>
    );
}

export default Header;