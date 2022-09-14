import React, { useEffect, useState } from 'react';
import '../Components/Navbar/Navbar.css';
import Netflix_icon from '../icons/Netflix_logo.svg';
import Netflix_Background from '../icons/netflix_background.jpg';
import TV from '../icons/tv.png';
import TV_video from '../icons/video-tv-in-image.m4v';
import Mobile from '../icons/mobile.jpg';
import Desktop from '../icons/device-pile-in.png';
import Desktop_video from '../icons/video-devices-in.m4v';
import Children from '../icons/children.png';
import './LandingPage.css';
import Footer from '../Components/Footer/Footer';
import { Navigate, useNavigate } from 'react-router-dom';
import Login from '../Components/Login/Login';
import { auth } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from '../Redux/Reducers/reducer';

const LandingPage = () => {
  const [signIn, setSignIn] = useState(false);
  const [show, setShow] = useState(false);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener('scroll', null);
    };
  }, []);
  const navigate = useNavigate();
  const home = () => {
    navigate('/homepage');
  };

  useEffect(() => {
    const logOut = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return logOut;
  }, [dispatch]);
  return (
    <>
      <>
        {!user ? (
          <>
            {/* Navbar */}
            <div className={`navbar ${show && 'navbar_black'}`}>
              <img
                onClick={home}
                className="navbar_logo"
                src={Netflix_icon}
                alt="Netflix-icon"
              />
              <button className="signin_btn" onClick={() => setSignIn(true)}>
                Sign In
              </button>
            </div>
            {/* Banner */}
            <header
              className="landing_banner"
              style={{
                backgroundSize: 'cover',
                backgroundImage: `url(${Netflix_Background})`,
                backgroundPosition: 'center center',
              }}
            >
              <div className="banner_fadeTop" />
            </header>
            {signIn ? (
              <Login />
            ) : (
              // Banner Details
              <div className="box">
                <div className="heading">
                  <h1>Unlimited movies, TV shows and more.</h1>
                  <h2>Watch anywhere. Cancel anytime.</h2>
                  <h3>
                    Ready to watch? Enter your email to create or restart your
                    membership.
                  </h3>
                </div>
                <div className="search">
                  <input type="text" placeholder="Email Address" />
                  <button onClick={() => setSignIn(true)}>
                    Get Started {'>'}
                  </button>
                </div>
              </div>
            )}
            <>
              {/* TV Section */}
              <section>
                <div className="tv_div">
                  <div className="tv_text">
                    <h1>Enjoy on your TV.</h1>
                    <h2>
                      Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple
                      TV, Blu-ray players and more.
                    </h2>
                  </div>
                  <div className="tv_image">
                    <img src={TV} alt="Tv" />
                    <div className="tv_video">
                      <video
                        src={TV_video}
                        autoPlay
                        playsInline
                        muted
                        loop
                      ></video>
                    </div>
                  </div>
                </div>
              </section>

              {/* Mobile Section */}
              <section>
                <div className="mobile_div">
                  <div className="mobile_image">
                    <img src={Mobile} alt="mobile" />
                    <div className="mobile_down">
                      <div className="strange">
                        <img
                          alt="Strange Things"
                          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                        ></img>
                      </div>
                      <div>
                        <div className="text_1">Stranger Things</div>
                        <div className="text_2">Downloading...</div>
                      </div>
                      <div className="download_icon"></div>
                    </div>
                  </div>
                  <div className="mobile_text">
                    <h1>Download your shows to watch offline.</h1>
                    <h2>
                      Save your favourites easily and always have something to
                      watch.
                    </h2>
                  </div>
                </div>
              </section>

              {/* Desktop Section */}
              <section>
                <div className="tv_div">
                  <div className="tv_text">
                    <h1>Watch everywhere.</h1>
                    <h2>
                      Stream unlimited movies and TV shows on your phone,
                      tablet, laptop, and TV.
                    </h2>
                  </div>
                  <div className="desktop_image">
                    <img src={Desktop} alt="Tv" />
                    <div className="desktop_video">
                      <video
                        src={Desktop_video}
                        autoPlay
                        playsInline
                        muted
                        loop
                      ></video>
                    </div>
                  </div>
                </div>
              </section>

              {/* Children section */}
              <section>
                <div className="children_div">
                  <div className="children_image">
                    <img src={Children} alt="Children" />
                  </div>
                  <div className="children_text">
                    <h1>Create profiles for children.</h1>
                    <h2>
                      Send children on adventures with their favourite
                      characters in a space made just for them—free with your
                      membership.
                    </h2>
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section className="faq_div">
                <div className="list">
                  <h1>Frequently Asked Questions</h1>
                  <div className="menu_div">
                    <div className="menu_item" id="item1">
                      <a href="#item1" className="title">
                        <span>What is Netflix?</span>
                        <i className="icon"></i>
                      </a>
                      <p className="list_text">
                        Netflix is a streaming service that offers a wide
                        variety of award-winning TV shows, movies, anime,
                        documentaries and more – on thousands of
                        internet-connected devices.
                        <br />
                        <br />
                        You can watch as much as you want, whenever you want,
                        without a single ad – all for one low monthly price.
                        There's always something new to discover, and new TV
                        shows and movies are added every week!
                      </p>
                    </div>
                    <div className="menu_item" id="item2">
                      <a href="#item2" className="title">
                        <span>How much does Netflix cost?</span>
                        <i className="icon"></i>
                      </a>
                      <p className="list_text">
                        Watch Netflix on your smartphone, tablet, Smart TV,
                        laptop, or streaming device, all for one fixed monthly
                        fee. Plans range from ₹ 149 to ₹ 649 a month. No extra
                        costs, no contracts.
                      </p>
                    </div>
                    <div className="menu_item" id="item3">
                      <a href="#item3" className="title">
                        <span>Where can I watch?</span>
                        <i className="icon"></i>
                      </a>
                      <p className="list_text">
                        Watch anywhere, anytime. Sign in with your Netflix
                        account to watch instantly on the web at netflix.com
                        from your personal computer or on any internet-connected
                        device that offers the Netflix app, including smart TVs,
                        smartphones, tablets, streaming media players and game
                        consoles.
                        <br />
                        <br />
                        You can also download your favourite shows with the iOS,
                        Android, or Windows 10 app. Use downloads to watch while
                        you're on the go and without an internet connection.
                        Take Netflix with you anywhere.
                      </p>
                    </div>
                    <div className="menu_item" id="item4">
                      <a href="#item4" className="title">
                        <span>How do I cancel?</span>
                        <i className="icon"></i>
                      </a>
                      <p className="list_text">
                        Netflix is flexible. There are no annoying contracts and
                        no commitments. You can easily cancel your account
                        online in two clicks. There are no cancellation fees –
                        start or stop your account anytime.
                      </p>
                    </div>
                    <div className="menu_item" id="item5">
                      <a href="#item5" className="title">
                        <span>What can I watch on Netflix?</span>
                        <i className="icon"></i>
                      </a>
                      <p className="list_text">
                        Netflix has an extensive library of feature films,
                        documentaries, TV shows, anime, award-winning Netflix
                        originals, and more. Watch as much as you want, anytime
                        you want.
                      </p>
                    </div>
                    <div className="menu_item" id="item6">
                      <a href="#item6" className="title">
                        <span>Is Netflix good for kids?</span>
                        <i className="icon"></i>
                      </a>
                      <p className="list_text">
                        The Netflix Kids experience is included in your
                        membership to give parents control while kids enjoy
                        family-friendly TV shows and films in their own space.
                        <br />
                        <br />
                        Kids profiles come with PIN-protected parental controls
                        that let you restrict the maturity rating of content
                        kids can watch and block specific titles you don’t want
                        kids to see.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="banner2">
                  <div className="box2">
                    <div className="heading2">
                      <h3>
                        Ready to watch? Enter your email to create or restart
                        your membership.
                      </h3>
                    </div>
                    <div className="search2">
                      <input type="text" placeholder="Email Address" />
                      <button onClick={() => setSignIn(true)}>
                        Get Started {'>'}
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Footer Section */}
              <Footer />
            </>
          </>
        ) : (
          <Navigate to="/homepage" replace={true} />
        )}
      </>
    </>
  );
};

export default LandingPage;
