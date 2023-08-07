[33mcommit 11da201ef6ffa839042706fd258ea0dd122564b0[m[33m ([m[1;36mHEAD -> [m[1;32mmain[m[33m)[m
Author: NickDurnil <nickdurnil@gmail.com>
Date:   Mon Aug 7 18:03:58 2023 -0400

    test

[1mdiff --git a/run.mp4 b/run.mp4[m
[1mdeleted file mode 100644[m
[1mindex 81c243a..0000000[m
Binary files a/run.mp4 and /dev/null differ

[33mcommit e813e00341f6851db424d71e18a14039811b7db0[m
Author: NickDurnil <nickdurnil@gmail.com>
Date:   Mon Aug 7 17:55:33 2023 -0400

    ready for bgr

[1mdiff --git a/MainPage.html b/MainPage.html[m
[1mindex eb11c74..c7edd39 100644[m
[1m--- a/MainPage.html[m
[1m+++ b/MainPage.html[m
[36m@@ -75,7 +75,8 @@[m
           <h3>The 2023 machine's construction is yet to begin, but our team is excitedly looking forward to beginning [m
             its design and kicking off another great year. Last year's machine was an epic casino heist! Follow the [m
             thief as he steals the casino's precious ruby and makes his escape before kicking off a final goal in honor [m
[31m-            of the World Cup! To see more of our machines check out the machines or click the link below!</h3>[m
[32m+[m[32m            of the World Cup! To see more of our machines check out the machines or click the link below!<br><a href="https://docs.google.com/forms/d/e/1FAIpQLSceVoLJ012egpAA4KxzHfx6WiTrWKXYMM4V0GVjEzmJzcnZPw/viewform?usp=sf_link">Join Now!</a></h3>[m
[32m+[m[41m            [m
           <p></p>[m
           </div>[m
         </div>[m
[1mdiff --git a/Style.css b/Style.css[m
[1mindex 8496436..f562417 100644[m
[1m--- a/Style.css[m
[1m+++ b/Style.css[m
[36m@@ -122,7 +122,7 @@[m [mh3{[m
 .machine-list{[m
     margin: 30px;;[m
     padding: 20px;[m
[31m-    height: 200px;[m
[32m+[m[32m    height: 250px;[m
     width:  1200px;[m
     display: flex;[m
     flex-direction: column;[m
[36m@@ -356,7 +356,7 @@[m [mhtml {[m
     .machine-list{[m
         margin: 30px;;[m
         width: 1080px;[m
[31m-        height: 225px;[m
[32m+[m[32m        height: 275px;[m
         padding: 20px;[m
         display: flex;[m
         flex-direction: column;[m
[36m@@ -431,7 +431,7 @@[m [mhtml {[m
     .machine-list{[m
         margin: 30px;;[m
         padding: 20px;[m
[31m-        height: 230px;[m
[32m+[m[32m        height: 280px;[m
         display: flex;[m
         flex-direction: column;[m
         align-items: center;[m
[36m@@ -489,7 +489,7 @@[m [mhtml {[m
     .machine-list{[m
         margin: 30px;;[m
         padding: 20px;[m
[31m-        height: 275px;[m
[32m+[m[32m        height: 325px;[m
         display: flex;[m
         flex-direction: column;[m
         align-items: center;[m
[36m@@ -582,7 +582,7 @@[m [mhtml {[m
     .machine-list{[m
         margin: 30px;;[m
         padding: 20px;[m
[31m-        height: 350px;[m
[32m+[m[32m        height: 375px;[m
         display: flex;[m
         flex-direction: column;[m
         align-items: center;[m
[36m@@ -712,7 +712,7 @@[m [mhtml {[m
     .machine-list{[m
         margin: 30px;;[m
         padding: 20px;[m
[31m-        height: 750px;[m
[32m+[m[32m        height: 800px;[m
         display: flex;[m
         flex-direction: column;[m
         align-items: center;[m

[33mcommit 865e251a9fdf67244183d89ce848963dcfe2b031[m
Author: NickDurnil <nickdurnil@gmail.com>
Date:   Mon Aug 7 17:38:27 2023 -0400

    video storage

[1mdiff --git a/.gitattributes b/.gitattributes[m
[1mnew file mode 100644[m
[1mindex 0000000..ea544b2[m
[1m--- /dev/null[m
[1m+++ b/.gitattributes[m
[36m@@ -0,0 +1 @@[m
[32m+[m[32m*.psd filter=lfs diff=lfs merge=lfs -text[m

[33mcommit 784d6ffb948c60b30c654d919ec78f56fb547221[m
Author: NickDurnil <nickdurnil@gmail.com>
Date:   Mon Aug 7 17:32:05 2023 -0400

    email and video fixed

[1mdiff --git a/MainPage.html b/MainPage.html[m
[1mindex 3b5dc33..eb11c74 100644[m
[1m--- a/MainPage.html[m
[1m+++ b/MainPage.html[m
[36m@@ -44,7 +44,7 @@[m
          <div class="hero" id="about">[m
            <div class="hero-description">[m
              <div class="hero-text">[m
[31m-              <video id="background-video" autoplay loop muted poster="run.mp4">[m
[32m+[m[32m              <video id="background-video" autoplay loop muted>[m
                 <source src="run.mp4" type="video/mp4">[m
                 </video>[m
               <h1 class="hero-title">Adding Fun to your Life</h1>[m
[36m@@ -168,7 +168,7 @@[m
         </div>[m
       <div class="contact" id="contact" style="padding-bottom: 10px !important;">[m
       <div class="contact-list">[m
[31m-        <h5><span><i class="fa fa-envelope w3-xlarge w3-text-light-grey"></i></span><button class="w3-btn w3-red w3-round " style="width: 100px; padding:3px 10px !important">Email Us</button></h5>[m
[32m+[m[32m        <h5><span><i class="fa fa-envelope w3-xlarge w3-text-light-grey"></i></span><a href="mailto: boilerchainreaction@gmail.com">boilermakerchainreaction@gmail.com</a></h5>[m
   [m
       </div>[m
 [m
[1mdiff --git a/run.mp4 b/run.mp4[m
[1mnew file mode 100644[m
[1mindex 0000000..81c243a[m
Binary files /dev/null and b/run.mp4 differ

[33mcommit a902ed6ea3ac0fa1dfe86731930838228df3a2ae[m
Author: NickDurnil <nickdurnil@gmail.com>
Date:   Mon Aug 7 17:10:51 2023 -0400

    video gone

[1mdiff --git a/run.mp4 b/run.mp4[m
[1mdeleted file mode 100644[m
[1mindex 81c243a..0000000[m
Binary files a/run.mp4 and /dev/null differ

[33mcommit 00e51d3a16e1e089e663f9e1728cf7131986c3f4[m
Author: NickDurnil <nickdurnil@gmail.com>
Date:   Mon Aug 7 17:03:13 2023 -0400

    changes

[1mdiff --git a/MainPage.html b/MainPage.html[m
[1mindex d3a3059..3b5dc33 100644[m
[1m--- a/MainPage.html[m
[1m+++ b/MainPage.html[m
[36m@@ -44,7 +44,7 @@[m
          <div class="hero" id="about">[m
            <div class="hero-description">[m
              <div class="hero-text">[m
[31m-              <video id="background-video" autoplay loop muted poster="https://assets.codepen.io/6093409/river.jpg">[m
[32m+[m[32m              <video id="background-video" autoplay loop muted poster="run.mp4">[m
                 <source src="run.mp4" type="video/mp4">[m
                 </video>[m
               <h1 class="hero-title">Adding Fun to your Life</h1>[m
[1mdiff --git a/Style.css b/Style.css[m
[1mindex 7e02d00..8496436 100644[m
[1m--- a/Style.css[m
[1m+++ b/Style.css[m
[36m@@ -327,8 +327,19 @@[m [mhtml {[m
 @media screen and (max-width: 1500px) {[m
     .hero{[m
         height: 550px !important;;[m
[31m-        background-image: url("TeamPhoto.JPG");[m
[32m+[m[32m        /*background-image: url("TeamPhoto.JPG")*/;[m
     }[m
[32m+[m[32m    #background-video {[m
[32m+[m[32m        width: 100vw;[m
[32m+[m[32m        height: 550px;[m
[32m+[m[32m        object-fit: cover;[m
[32m+[m[32m        position:absolute;[m
[32m+[m[32m        left: 0;[m
[32m+[m[32m        right: 0;[m
[32m+[m[32m        top: 0;[m
[32m+[m[32m        bottom: 0;[m
[32m+[m[32m        z-index: -1;[m
[32m+[m[32m      }[m
     .hero-description{[m
         height: 550px[m
     }[m
[36m@@ -537,8 +548,19 @@[m [mhtml {[m
     }[m
     .hero{[m
         height: 400px !important;[m
[31m-        background-image: url("TeamPhoto.JPG");[m
[32m+[m[32m        /*background-image: url("TeamPhoto.JPG");*/[m
     }[m
[32m+[m[32m    #background-video {[m
[32m+[m[32m        width: 100vw;[m
[32m+[m[32m        height: 400px;[m
[32m+[m[32m        object-fit: cover;[m
[32m+[m[32m        position:absolute;[m
[32m+[m[32m        left: 0;[m
[32m+[m[32m        right: 0;[m
[32m+[m[32m        top: 0;[m
[32m+[m[32m        bottom: 0;[m
[32m+[m[32m        z-index: -1;[m
[32m+[m[32m      }[m
     .hero-description{[m
         height: 400px;[m
         background-color: rgba(0, 0, 21, .7);[m
[36m@@ -657,8 +679,19 @@[m [mhtml {[m
     }[m
     .hero{[m
         height: 600px !important;[m
[31m-        background-image: url("TeamPhoto.JPG");[m
[32m+[m[32m        /*background-image: url("TeamPhoto.JPG");*/[m
     }[m
[32m+[m[32m    #background-video {[m
[32m+[m[32m        width: 100vw;[m
[32m+[m[32m        height: 600px;[m
[32m+[m[32m        object-fit: cover;[m
[32m+[m[32m        position:absolute;[m
[32m+[m[32m        left: 0;[m
[32m+[m[32m        right: 0;[m
[32m+[m[32m        top: 0;[m
[32m+[m[32m        bottom: 0;[m
[32m+[m[32m        z-index: -1;[m
[32m+[m[32m      }[m
     .hero-description{[m
         height: 600px;[m
         background-color: rgba(0, 0, 21, .7);[m

[33mcommit 105d358a86b0286c128b033822a007419e33232c[m
Author: NickDurnil <nickdurnil@gmail.com>
Date:   Mon Aug 7 16:52:36 2023 -0400

    added video

[1mdiff --git a/BCR2.jpeg b/BCR2.jpeg[m
[1mnew file mode 100644[m
[1mindex 0000000..1af65d5[m
Binary files /dev/null and b/BCR2.jpeg differ
[1mdiff --git a/MainPage.html b/MainPage.html[m
[1mindex ce8ae60..d3a3059 100644[m
[1m--- a/MainPage.html[m
[1m+++ b/MainPage.html[m
[36m@@ -44,6 +44,9 @@[m
          <div class="hero" id="about">[m
            <div class="hero-description">[m
              <div class="hero-text">[m
[32m+[m[32m              <video id="background-video" autoplay loop muted poster="https://assets.codepen.io/6093409/river.jpg">[m
[32m+[m[32m                <source src="run.mp4" type="video/mp4">[m
[32m+[m[32m                </video>[m
               <h1 class="hero-title">Adding Fun to your Life</h1>[m
               <p>[m
                 Were you wondering about the Boilermaker Chain Reaction Team? Well you've come to the right place! [m
[36m@@ -55,12 +58,9 @@[m
               <span class="w3-text-white social" style="margin-top:050px">[m
                 <p >Follow us on Social media</p>[m
                 <div class="w3-margin-top">[m
[31m-             <a href="#">  <i class="fa fa-facebook-official w3-hover-opacity icons" ></i></a> [m
[31m-             <a href="#"><i class="fa fa-instagram w3-hover-opacity icons" ></i></a> [m
[31m-             <a href="#"><i class="fa fa-snapchat w3-hover-opacity icons"></i></a>  [m
[31m-             <a href="#"><i class="fa fa-pinterest-p w3-hover-opacity icons" ></i></a>  [m
[31m-             <a href="#"><i class="fa fa-twitter w3-hover-opacity icons"></i></a>  [m
[31m-             <a href="#"><i class="fa fa-linkedin w3-hover-opacity icons"></i></a>  [m
[32m+[m[32m             <a href="https://www.facebook.com/boilermaker.chainreaction?locale=hu_HU"><i class="fa fa-facebook-official w3-hover-opacity icons" ></i></a>[m[41m [m
[32m+[m[32m             <a href="https://www.instagram.com/boilermaker.chainreactionteam/"><i class="fa fa-instagram w3-hover-opacity icons" ></i></a>[m[41m [m
[32m+[m[32m             <a href="https://twitter.com/BoilermakerCRT"><i class="fa fa-twitter w3-hover-opacity icons"></i></a>[m[41m  [m
              </div>[m
               </span>[m
              </div>[m
[36m@@ -168,19 +168,9 @@[m
         </div>[m
       <div class="contact" id="contact" style="padding-bottom: 10px !important;">[m
       <div class="contact-list">[m
[31m-        <h5><span><i class="fa fa-envelope w3-xlarge w3-text-light-grey"></i></span>Receive weekly update email</h5>[m
[31m-        <div class="email-contact">[m
[31m-          <input placeholder="Email"  type="email" style="margin: 8px 0px !important;"/>[m
[31m-          [m
[31m-          <button class="w3-btn w3-red w3-round " style="width: 100px; padding:3px 10px !important">Subscribe</button>[m
[31m-        </div>[m
[32m+[m[32m        <h5><span><i class="fa fa-envelope w3-xlarge w3-text-light-grey"></i></span><button class="w3-btn w3-red w3-round " style="width: 100px; padding:3px 10px !important">Email Us</button></h5>[m
   [m
       </div>[m
[31m-      <div class="contact-list" >[m
[31m-        <h5><span><i class="fa fa-phone w3-xlarge w3-text-light-grey"></i></span>Phone</h5>[m
[31m-        <p>  763-957-6781</p>[m
[31m-        <p>706-734-2591</p>[m
[31m-      </div>[m
 [m
       </div>[m
     </div>[m
[1mdiff --git a/Style.css b/Style.css[m
[1mindex 45b7626..7e02d00 100644[m
[1m--- a/Style.css[m
[1m+++ b/Style.css[m
[36m@@ -9,6 +9,19 @@[m
     [m
 [m
 }[m
[32m+[m
[32m+[m[32m#background-video {[m
[32m+[m[32m    width: 100vw;[m
[32m+[m[32m    height: 900px;[m
[32m+[m[32m    object-fit: cover;[m
[32m+[m[32m    position:absolute;[m
[32m+[m[32m    left: 0;[m
[32m+[m[32m    right: 0;[m
[32m+[m[32m    top: 0;[m
[32m+[m[32m    bottom: 0;[m
[32m+[m[32m    z-index: -1;[m
[32m+[m[32m  }[m
[32m+[m
 .heeder-large-screen{[m
     display: flex !important;[m
     justify-content: space-evenly !important;[m
[36m@@ -27,17 +40,18 @@[m
 }[m
 [m
 .hero{[m
[31m-    height: 650px;[m
[31m-    background-image: url("TeamPhoto.JPG");[m
[32m+[m[32m    height: 900px;[m
[32m+[m[32m    /*background-image: url("BCR2.jpeg");[m
     background-repeat: no-repeat;[m
     background-size: cover;[m
     background-position:center;[m
     background-color: #000015; [m
[32m+[m[32m    */[m
 [m
     [m
 }[m
 .hero-description{[m
[31m-    height: 650px;[m
[32m+[m[32m    height: 900px;[m
     background-color: rgba(0, 0, 21, .7);[m
     display: flex;[m
 }[m
[1mdiff --git a/run.mp4 b/run.mp4[m
[1mnew file mode 100644[m
[1mindex 0000000..81c243a[m
Binary files /dev/null and b/run.mp4 differ

[33mcommit 2ea77c394183135550a24fe048ea21b03abfdc9c[m[33m ([m[1;31morigin/main[m[33m, [m[1;31morigin/HEAD[m[33m)[m
Author: NickDurnil <nickdurnil@gmail.com>
Date:   Mon Aug 7 15:52:02 2023 -0400

    resolution fixes

[1mdiff --git a/MainPage.html b/MainPage.html[m
[1mindex 9eeba57..ce8ae60 100644[m
[1m--- a/MainPage.html[m
[1m+++ b/MainPage.html[m
[36m@@ -156,7 +156,16 @@[m
       <div>[m
 [m
       <h2 class="title">Reach out to us</h2>[m
[31m-      <h4>Have any more questions or a request? Check out our social media or contact us with the information below! We'd love to hear from you!</h4>[m
[32m+[m[32m      <div class="outreach">[m
[32m+[m
[32m+[m[32m          <div class="outreach-list">[m
[32m+[m[32m            <div class="outreach-text-description">[m
[32m+[m[32m              <h4>Have any more questions or a request? Check out our social media or contact us with the information below! We'd love to hear from you!</h4>[m
[32m+[m[41m              [m
[32m+[m[32m            </div>[m
[32m+[m
[32m+[m[32m          </div>[m
[32m+[m[32m        </div>[m
       <div class="contact" id="contact" style="padding-bottom: 10px !important;">[m
       <div class="contact-list">[m
         <h5><span><i class="fa fa-envelope w3-xlarge w3-text-light-grey"></i></span>Receive weekly update email</h5>[m
[1mdiff --git a/Style.css b/Style.css[m
[1mindex e361da4..45b7626 100644[m
[1m--- a/Style.css[m
[1m+++ b/Style.css[m
[36m@@ -173,7 +173,7 @@[m [mh3{[m
 }[m
 .history-list{[m
     width:  1200px;[m
[31m-    height: 850px;[m
[32m+[m[32m    height: 900px;[m
      margin: 20px;[m
     overflow: hidden;[m
     border-top: none;[m
[36m@@ -231,7 +231,7 @@[m [mh4{[m
     [m
 }[m
 .event-text{[m
[31m-    width:90%;[m
[32m+[m[32m    width:70%;[m
     color: orange;[m
 [m
 }[m
[36m@@ -323,13 +323,15 @@[m [mhtml {[m
     }[m
 }[m
 /*Large Tablet screen*/[m
[31m-@media screen and (max-width: 1600px) {[m
[32m+[m[32m@media screen and (max-width: 2560px) {[m
     main{[m
         width:100% !important;[m
         margin: auto !important;[m
     }[m
     .machine-list{[m
         margin: 30px;;[m
[32m+[m[32m        width: 1080px;[m
[32m+[m[32m        height: 225px;[m
         padding: 20px;[m
         display: flex;[m
         flex-direction: column;[m
[36m@@ -345,7 +347,8 @@[m [mhtml {[m
     .join-list{[m
         margin:  30px;[m
         padding: 20px;[m
[31m-        height: 175px;[m
[32m+[m[32m        height: 125px;[m
[32m+[m[32m        width: 1080px;[m
         display: flex;[m
         flex-direction: column;[m
         align-items: center;[m
[36m@@ -363,7 +366,8 @@[m [mhtml {[m
         [m
     }[m
     .history-list{[m
[31m-        height: 1225px;[m
[32m+[m[32m        height: 1300px;[m
[32m+[m[32m        width: 1080px;[m
         margin: 20px;[m
         overflow: hidden;[m
         border-top: none;[m
[36m@@ -376,6 +380,21 @@[m [mhtml {[m
         color:white;[m
         [m
     }[m
[32m+[m[32m    .outreach-list{[m
[32m+[m[32m        width:  1080px;[m
[32m+[m[32m        height: 100x;[m
[32m+[m[32m         margin: 20px;[m
[32m+[m[32m        overflow: hidden;[m
[32m+[m[32m        border-top: none;[m
[32m+[m[41m        [m
[32m+[m[32m          -webkit-box-shadow: 0 8px 40px 0 rgba(45, 57, 231, 0.37);[m
[32m+[m[32m                  box-shadow: 0 8px 40px 0 rgba(45, 57, 231, 0.37);[m
[32m+[m[32m        backdrop-filter: blur( 4px );[m
[32m+[m[32m        -webkit-backdrop-filter: blur( 4px );[m
[32m+[m[32m        border-bottom: 1px solid blueviolet;[m
[32m+[m[32m        color:white;[m
[32m+[m[41m         [m
[32m+[m[32m    }[m
     [m
 }[m
 /*Vertical screen*/[m
[36m@@ -445,7 +464,7 @@[m [mhtml {[m
     .machine-list{[m
         margin: 30px;;[m
         padding: 20px;[m
[31m-        height: 750px;[m
[32m+[m[32m        height: 275px;[m
         display: flex;[m
         flex-direction: column;[m
         align-items: center;[m
[36m@@ -460,7 +479,7 @@[m [mhtml {[m
     .join-list{[m
         margin: 30px;;[m
         padding: 20px;[m
[31m-        height: 375px;[m
[32m+[m[32m        height: px;[m
         display: flex;[m
         flex-direction: column;[m
         align-items: center;[m
[36m@@ -474,11 +493,11 @@[m [mhtml {[m
     }[m
     .game-image{[m
         width:fit-content;[m
[31m-        height:300px;[m
[32m+[m[32m        height:850px;[m
         [m
     }[m
     .history-list{[m
[31m-        height: 1550px;[m
[32m+[m[32m        height: 1275px;[m
         margin: 20px;[m
         overflow: hidden;[m
         border-top: none;[m
[36m@@ -527,7 +546,7 @@[m [mhtml {[m
     .machine-list{[m
         margin: 30px;;[m
         padding: 20px;[m
[31m-        height: 750px;[m
[32m+[m[32m        height: 350px;[m
         display: flex;[m
         flex-direction: column;[m
         align-items: center;[m
[36m@@ -542,7 +561,7 @@[m [mhtml {[m
     .join-list{[m
         margin: 30px;;[m
         padding: 20px;[m
[31m-        height: 375px;[m
[32m+[m[32m        height: 200px;[m
         display: flex;[m
         flex-direction: column;[m
         align-items: center;[m
[36m@@ -556,11 +575,11 @@[m [mhtml {[m
     }[m
     .game-image{[m
         width:fit-content;[m
[31m-        height:300px;[m
[32m+[m[32m        height:550px;[m
         [m
     }[m
     .history-list{[m
[31m-        height: 1550px;[m
[32m+[m[32m        height: 1100px;[m
         margin: 20px;[m
         overflow: hidden;[m
         border-top: none;[m
[36m@@ -575,7 +594,7 @@[m [mhtml {[m
     }[m
     .event-text{[m
         width:80%;[m
[31m-        color: blueviolet;[m
[32m+[m[32m        color: orange;[m
 [m
     }[m
     .event-text p{[m
[36m@@ -589,7 +608,7 @@[m [mhtml {[m
 [m
     }[m
     .event-hero{[m
[31m-        width: 80% ;[m
[32m+[m[32m        width: 100% ;[m
         margin: auto;[m
     }[m
     .event-image{[m

[33mcommit e76a9f042054601e9b61c6a0baf46a2547b874c6[m
Author: NickDurnil <nickdurnil@gmail.com>
Date:   Mon Aug 7 13:54:38 2023 -0400

    displays added

[1mdiff --git a/MainPage.html b/MainPage.html[m
[1mindex eeb09ab..9eeba57 100644[m
[1m--- a/MainPage.html[m
[1m+++ b/MainPage.html[m
[36m@@ -128,7 +128,7 @@[m
             <div class="outreach-text-description">[m
               <h4>Want to have our team come out? We do outreach with elementary schools, clubs, scout troops, or other [m
                 organizations who want to learn more about our operation! We would love to talk to you and your friends [m
[31m-                about Rube Goldberg, our team, what we do, and STEM! Check out Out Reach for details!</h4>[m
[32m+[m[32m                about Rube Goldberg, our team, what we do, and STEM! Check out Outreach for details!</h4>[m
               [m
             </div>[m
 [m
[1mdiff --git a/Style.css b/Style.css[m
[1mindex 588dbd5..e361da4 100644[m
[1m--- a/Style.css[m
[1m+++ b/Style.css[m
[36m@@ -108,8 +108,8 @@[m [mh3{[m
 .machine-list{[m
     margin: 30px;;[m
     padding: 20px;[m
[31m-    height: 300px;[m
[31m-    width:  700px;[m
[32m+[m[32m    height: 200px;[m
[32m+[m[32m    width:  1200px;[m
     display: flex;[m
     flex-direction: column;[m
     align-items: center;[m
[36m@@ -136,8 +136,8 @@[m [mh3{[m
 .join-list{[m
     margin: 30px;;[m
     padding: 20px;[m
[31m-    height: 200px;[m
[31m-    width:  700px;[m
[32m+[m[32m    height: 125px;[m
[32m+[m[32m    width:  1200px;[m
     display: flex;[m
     flex-direction: column;[m
     align-items: center;[m
[36m@@ -157,23 +157,23 @@[m [mh3{[m
 }[m
 .history{[m
     margin-top: 20px !important;[m
[31m-display: flex;[m
[31m-justify-content: space-evenly;[m
[31m-flex-wrap: wrap;[m
[32m+[m[32m    display: flex;[m
[32m+[m[32m    justify-content: space-evenly;[m
[32m+[m[32m    flex-wrap: wrap;[m
 }[m
 .game-image{[m
[31m-    width:700px;[m
[31m-    height:300px;[m
[32m+[m[32m    width:1200px;[m
[32m+[m[32m    height:450px;[m
     [m
 }[m
 .game-image img{[m
[31m-    width:100%;[m
[32m+[m[32m    width:  100%;[m
     height: 100%;[m
     object-fit: cover;[m
 }[m
 .history-list{[m
[31m-    width:  700px;[m
[31m-    height: 900px;[m
[32m+[m[32m    width:  1200px;[m
[32m+[m[32m    height: 850px;[m
      margin: 20px;[m
     overflow: hidden;[m
     border-top: none;[m
[36m@@ -188,12 +188,12 @@[m [mflex-wrap: wrap;[m
 }[m
 .outreach{[m
     margin-top: 20px !important;[m
[31m-display: flex;[m
[31m-justify-content: space-evenly;[m
[31m-flex-wrap: wrap;[m
[32m+[m[32m    display: flex;[m
[32m+[m[32m    justify-content: space-evenly;[m
[32m+[m[32m    flex-wrap: wrap;[m
 }[m
 .outreach-list{[m
[31m-    width:  700px;[m
[32m+[m[32m    width:  1200px;[m
     height: 100x;[m
      margin: 20px;[m
     overflow: hidden;[m
[36m@@ -231,7 +231,7 @@[m [mh4{[m
     [m
 }[m
 .event-text{[m
[31m-    width:50%;[m
[32m+[m[32m    width:90%;[m
     color: orange;[m
 [m
 }[m
[36m@@ -322,13 +322,175 @@[m [mhtml {[m
         font-size:50px;[m
     }[m
 }[m
[32m+[m[32m/*Large Tablet screen*/[m
[32m+[m[32m@media screen and (max-width: 1600px) {[m
[32m+[m[32m    main{[m
[32m+[m[32m        width:100% !important;[m
[32m+[m[32m        margin: auto !important;[m
[32m+[m[32m    }[m
[32m+[m[32m    .machine-list{[m
[32m+[m[32m        margin: 30px;;[m
[32m+[m[32m        padding: 20px;[m
[32m+[m[32m        display: flex;[m
[32m+[m[32m        flex-direction: column;[m
[32m+[m[32m        align-items: center;[m
[32m+[m[32m        border:1px solid gray;[m
[32m+[m[32m        background: rgba(255, 75, 255, 0.1);[m
[32m+[m[32m        box-shadow: 0 8px 40px 0 rgba(45, 57, 231, 0.37);[m
[32m+[m[32m        backdrop-filter: blur( 4px );[m
[32m+[m[32m        -webkit-backdrop-filter: blur( 4px );[m
[32m+[m[32m        border-radius: 10px;[m
[32m+[m[32m        border: 1px solid rgba( 255, 255, 255, 0.18 );[m
[32m+[m[32m    }[m
[32m+[m[32m    .join-list{[m
[32m+[m[32m        margin:  30px;[m
[32m+[m[32m        padding: 20px;[m
[32m+[m[32m        height: 175px;[m
[32m+[m[32m        display: flex;[m
[32m+[m[32m        flex-direction: column;[m
[32m+[m[32m        align-items: center;[m
[32m+[m[32m        border:1px solid gray;[m
[32m+[m[32m        background: rgba(255, 75, 255, 0.1);[m
[32m+[m[32m        box-shadow: 0 8px 40px 0 rgba(45, 57, 231, 0.37);[m
[32m+[m[32m        backdrop-filter: blur( 4px );[m
[32m+[m[32m        -webkit-backdrop-filter: blur( 4px );[m
[32m+[m[32m        border-radius: 10px;[m
[32m+[m[32m        border: 1px solid rgba( 255, 255, 255, 0.18 );[m
[32m+[m[32m    }[m
[32m+[m[32m    .game-image{[m
[32m+[m[32m        width:fit-content;[m
[32m+[m[32m        height:900px;[m
[32m+[m[41m        [m
[32m+[m[32m    }[m
[32m+[m[32m    .history-list{[m
[32m+[m[32m        height: 1225px;[m
[32m+[m[32m        margin: 20px;[m
[32m+[m[32m        overflow: hidden;[m
[32m+[m[32m        border-top: none;[m
[32m+[m[41m        [m
[32m+[m[32m        -webkit-box-shadow: 0 8px 40px 0 rgba(45, 57, 231, 0.37);[m
[32m+[m[32m                box-shadow: 0 8px 40px 0 rgba(45, 57, 231, 0.37);[m
[32m+[m[32m        backdrop-filter: blur( 4px );[m
[32m+[m[32m        -webkit-backdrop-filter: blur( 4px );[m
[32m+[m[32m        border-bottom: 1px solid blueviolet;[m
[32m+[m[32m        color:white;[m
[32m+[m[41m        [m
[32m+[m[32m    }[m
[32m+[m[41m    [m
[32m+[m[32m}[m
[32m+[m[32m/*Vertical screen*/[m
[32m+[m[32m@media screen and (max-width: 1080px) {[m
[32m+[m[32m    main{[m
[32m+[m[32m        width:100% !important;[m
[32m+[m[32m        margin: auto !important;[m
[32m+[m[32m    }[m
[32m+[m[32m    .machine-list{[m
[32m+[m[32m        margin: 30px;;[m
[32m+[m[32m        padding: 20px;[m
[32m+[m[32m        height: 230px;[m
[32m+[m[32m        display: flex;[m
[32m+[m[32m        flex-direction: column;[m
[32m+[m[32m        align-items: center;[m
[32m+[m[32m        border:1px solid gray;[m
[32m+[m[32m        background: rgba(255, 75, 255, 0.1);[m
[32m+[m[32m        box-shadow: 0 8px 40px 0 rgba(45, 57, 231, 0.37);[m
[32m+[m[32m        backdrop-filter: blur( 4px );[m
[32m+[m[32m        -webkit-backdrop-filter: blur( 4px );[m
[32m+[m[32m        border-radius: 10px;[m
[32m+[m[32m        border: 1px solid rgba( 255, 255, 255, 0.18 );[m
[32m+[m[32m    }[m
[32m+[m[32m    .join-list{[m
[32m+[m[32m        margin: 30px;;[m
[32m+[m[32m        padding: 20px;[m
[32m+[m[32m        height: 175px;[m
[32m+[m[32m        display: flex;[m
[32m+[m[32m        flex-direction: column;[m
[32m+[m[32m        align-items: center;[m
[32m+[m[32m        border:1px solid gray;[m
[32m+[m[32m        background: rgba(255, 75, 255, 0.1);[m
[32m+[m[32m        box-shadow: 0 8px 40px 0 rgba(45, 57, 231, 0.37);[m
[32m+[m[32m        backdrop-filter: blur( 4px );[m
[32m+[m[32m        -webkit-backdrop-filter: blur( 4px );[m
[32m+[m[32m        border-radius: 10px;[m
[32m+[m[32m        border: 1px solid rgba( 255, 255, 255, 0.18 );[m
[32m+[m[32m    }[m
[32m+[m[32m    .game-image{[m
[32m+[m[32m        width:fit-content;[m
[32m+[m[32m        height:900px;[m
[32m+[m[41m        [m
[32m+[m[32m    }[m
[32m+[m[32m    .history-list{[m
[32m+[m[32m        height: 1300px;[m
[32m+[m[32m        margin: 20px;[m
[32m+[m[32m        overflow: hidden;[m
[32m+[m[32m        border-top: none;[m
[32m+[m[41m        [m
[32m+[m[32m        -webkit-box-shadow: 0 8px 40px 0 rgba(45, 57, 231, 0.37);[m
[32m+[m[32m                box-shadow: 0 8px 40px 0 rgba(45, 57, 231, 0.37);[m
[32m+[m[32m        backdrop-filter: blur( 4px );[m
[32m+[m[32m        -webkit-backdrop-filter: blur( 4px );[m
[32m+[m[32m        border-bottom: 1px solid blueviolet;[m
[32m+[m[32m        color:white;[m
[32m+[m[41m        [m
[32m+[m[32m    }[m
[32m+[m[41m    [m
[32m+[m[32m}[m
 [m
 /*medium screens - Laptops*/[m
 @media screen and (max-width: 1024px) {[m
     main{[m
         width:100% !important;[m
         margin: auto !important;[m
[31m-    }    [m
[32m+[m[32m    }[m
[32m+[m[32m    .machine-list{[m
[32m+[m[32m        margin: 30px;;[m
[32m+[m[32m        padding: 20px;[m
[32m+[m[32m        height: 750px;[m
[32m+[m[32m        display: flex;[m
[32m+[m[32m        flex-direction: column;[m
[32m+[m[32m        align-items: center;[m
[32m+[m[32m        border:1px solid gray;[m
[32m+[m[32m        background: rgba(255, 75, 255, 0.1);[m
[32m+[m[32m        box-shadow: 0 8px 40px 0 rgba(45, 57, 231, 0.37);[m
[32m+[m[32m        backdrop-filter: blur( 4px );[m
[32m+[m[32m        -webkit-backdrop-filter: blur( 4px );[m
[32m+[m[32m        border-radius: 10px;[m
[32m+[m[32m        border: 1px solid rgba( 255, 255, 255, 0.18 );[m
[32m+[m[32m    }[m
[32m+[m[32m    .join-list{[m
[32m+[m[32m        margin: 30px;;[m
[32m+[m[32m        padding: 20px;[m
[32m+[m[32m        height: 375px;[m
[32m+[m[32m        display: flex;[m
[32m+[m[32m        flex-direction: column;[m
[32m+[m[32m        align-items: center;[m
[32m+[m[32m        border:1px solid gray;[m
[32m+[m[32m        background: rgba(255, 75, 255, 0.1);[m
[32m+[m[32m        box-shadow: 0 8px 40px 0 rgba(45, 57, 231, 0.37);[m
[32m+[m[32m        backdrop-filter: blur( 4px );[m
[32m+[m[32m        -webkit-backdrop-filter: blur( 4px );[m
[32m+[m[32m        border-radius: 10px;[m
[32m+[m[32m        border: 1px solid rgba( 255, 255, 255, 0.18 );[m
[32m+[m[32m    }[m
[32m+[m[32m    .game-image{[m
[32m+[m[32m        width:fit-content;[m
[32m+[m[32m        height:300px;[m
[32m+[m[41m        [m
[32m+[m[32m    }[m
[32m+[m[32m    .history-list{[m
[32m+[m[32m        height: 1550px;[m
[32m+[m[32m        margin: 20px;[m
[32m+[m[32m        overflow: hidden;[m
[32m+[m[32m        border-top: none;[m
[32m+[m[41m        [m
[32m+[m[32m        -webkit-box-shadow: 0 8px 40px 0 rgba(45, 57, 231, 0.37);[m
[32m+[m[32m                box-shadow: 0 8px 40px 0 rgba(45, 57, 231, 0.37);[m
[32m+[m[32m        backdrop-filter: blur( 4px );[m
[32m+[m[32m        -webkit-backdrop-filter: blur( 4px );[m
[32m+[m[32m        border-bottom: 1px solid blueviolet;[m
[32m+[m[32m        color:white;[m
[32m+[m[41m        [m
[32m+[m[32m    }[m
     [m
 }[m
 [m
[36m@@ -342,7 +504,7 @@[m [mhtml {[m
     }[m
     .hero{[m
         height: 400px !important;[m
[31m-        background-image: url("https://spaces.w3schools.com/images/HVYepJYeHdQ_480_300.jpg");[m
[32m+[m[32m        background-image: url("TeamPhoto.JPG");[m
     }[m
     .hero-description{[m
         height: 400px;[m
[36m@@ -362,6 +524,55 @@[m [mhtml {[m
         text-align: center;[m
         font-size: 30px;[m
     }[m
[32m+[m[32m    .machine-list{[m
[32m+[m[32m        margin: 30px;;[m
[32m+[m[32m        padding: 20px;[m
[32m+[m[32m        height: 750px;[m
[32m+[m[32m        display: flex;[m
[32m+[m[32m        flex-direction: column;[m
[32m+[m[32m        align-items: center;[m
[32m+[m[32m        border:1px solid gray;[m
[32m+[m[32m        background: rgba(255, 75, 255, 0.1);[m
[32m+[m[32m        box-shadow: 0 8px 40px 0 rgba(45, 57, 231, 0.37);[m
[32m+[m[32m        backdrop-filter: blur( 4px );[m
[32m+[m[32m        -webkit-backdrop-filter: blur( 4px );[m
[32m+[m[32m        border-radius: 10px;[m
[32m+[m[32m        border: 1px solid rgba( 255, 255, 255, 0.18 );[m
[32m+[m[32m    }[m
[32m+[m[32m    .join-list{[m
[32m+[m[32m        margin: 30px;;[m
[32m+[m[32m        padding: 20px;[m
[32m+[m[32m        height: 375px;[m
[32m+[m[32m        display: flex;[m
[32m+[m[32m        flex-direction: column;[m
[32m+[m[32m        align-items: center;[m
[32m+[m[32m        border:1px solid gray;[m
[32m+[m[32m        background: rgba(255, 75, 255, 0.1);[m
[32m+[m[32m        box-shadow: 0 8px 40px 0 rgba(45, 57, 231, 0.37);[m
[32m+[m[32m        backdrop-filter: blur( 4px );[m
[32m+[m[32m        -webkit-backdrop-filter: blur( 4px );[m
[32m+[m[32m        border-radius: 10px;[m
[32m+[m[32m        border: 1px solid rgba( 255, 255, 255, 0.18 );[m
[32m+[m[32m    }[m
[32m+[m[32m    .game-image{[m
[32m+[m[32m        width:fit-content;[m
[32m+[m[32m        height:300px;[m
[32m+[m[41m        [m
[32m+[m[32m    }[m
[32m+[m[32m    .history-list{[m
[32m+[m[32m        height: 1550px;[m
[32m+[m[32m        margin: 20px;[m
[32m+[m[32m        overflow: hidden;[m
[32m+[m[32m        border-top: none;[m
[32m+[m[41m        [m
[32m+[m[32m        -webkit-box-shadow: 0 8px 40px 0 rgba(45, 57, 231, 0.37);[m
[32m+[m[32m                box-shadow: 0 8px 40px 0 rgba(45, 57, 231, 0.37);[m
[32m+[m[32m        backdrop-filter: blur( 4px );[m
[32m+[m[32m        -webkit-backdrop-filter: blur( 4px );[m
[32m+[m[32m        border-bottom: 1px solid blueviolet;[m
[32m+[m[32m        color:white;[m
[32m+[m[41m        [m
[32m+[m[32m    }[m
     .event-text{[m
         width:80%;[m
         color: blueviolet;[m
[36m@@ -412,11 +623,11 @@[m [mhtml {[m
         display:block !important;[m
     }[m
     .hero{[m
[31m-        height: 450px !important;[m
[32m+[m[32m        height: 600px !important;[m
         background-image: url("TeamPhoto.JPG");[m
     }[m
     .hero-description{[m
[31m-        height: 450px;[m
[32m+[m[32m        height: 600px;[m
         background-color: rgba(0, 0, 21, .7);[m
     [m
     }[m
[36m@@ -432,9 +643,58 @@[m [mhtml {[m
         text-align: center;[m
         font-size: 25px;[m
     }[m
[32m+[m[32m    .machine-list{[m
[32m+[m[32m        margin: 30px;;[m
[32m+[m[32m        padding: 20px;[m
[32m+[m[32m        height: 750px;[m
[32m+[m[32m        display: flex;[m
[32m+[m[32m        flex-direction: column;[m
[32m+[m[32m        align-items: center;[m
[32m+[m[32m        border:1px solid gray;[m
[32m+[m[32m        background: rgba(255, 75, 255, 0.1);[m
[32m+[m[32m        box-shadow: 0 8px 40px 0 rgba(45, 57, 231, 0.37);[m
[32m+[m[32m        backdrop-filter: blur( 4px );[m
[32m+[m[32m        -webkit-backdrop-filter: blur( 4px );[m
[32m+[m[32m        border-radius: 10px;[m
[32m+[m[32m        border: 1px solid rgba( 255, 255, 255, 0.18 );[m
[32m+[m[32m    }[m
[32m+[m[32m    .join-list{[m
[32m+[m[32m        margin: 30px;;[m
[32m+[m[32m        padding: 20px;[m
[32m+[m[32m        height: 375px;[m
[32m+[m[32m        display: flex;[m
[32m+[m[32m        flex-direction: column;[m
[32m+[m[32m        align-items: center;[m
[32m+[m[32m        border:1px solid gray;[m
[32m+[m[32m        background: rgba(255, 75, 255, 0.1);[m
[32m+[m[32m        box-shadow: 0 8px 40px 0 rgba(45, 57, 231, 0.37);[m
[32m+[m[32m        backdrop-filter: blur( 4px );[m
[32m+[m[32m        -webkit-backdrop-filter: blur( 4px );[m
[32m+[m[32m        border-radius: 10px;[m
[32m+[m[32m        border: 1px solid rgba( 255, 255, 255, 0.18 );[m
[32m+[m[32m    }[m
[32m+[m[32m    .game-image{[m
[32m+[m[32m        width:fit-content;[m
[32m+[m[32m        height:300px;[m
[32m+[m[41m        [m
[32m+[m[32m    }[m
[32m+[m[32m    .history-list{[m
[32m+[m[32m        height: 1550px;[m
[32m+[m[32m        margin: 20px;[m
[32m+[m[32m        overflow: hidden;[m
[32m+[m[32m        border-top: none;[m
[32m+[m[41m        [m
[32m+[m[32m        -webkit-box-shadow: 0 8px 40px 0 rgba(45, 57, 231, 0.37);[m
[32m+[m[32m                box-shadow: 0 8px 40px 0 rgba(45, 57, 231, 0.37);[m
[32m+[m[32m        backdrop-filter: blur( 4px );[m
[32m+[m[32m        -webkit-backdrop-filter: blur( 4px );[m
[32m+[m[32m        border-bottom: 1px solid blueviolet;[m
[32m+[m[32m        color:white;[m
[32m+[m[41m        [m
[32m+[m[32m    }[m
     .event-text{[m
         width:100%;[m
[31m-        color: blueviolet;[m
[32m+[m[32m        color: orange;[m
 [m
     }[m
     .event-text p{[m

[33mcommit 5a6a41348ba72d55d1455d5b0dcf1f19cf71f86b[m
Author: NickDurnil <nickdurnil@gmail.com>
Date:   Mon Aug 7 00:34:47 2023 -0400

    Quick update

[1mdiff --git a/MainPage.html b/MainPage.html[m
[1mindex 3e45cbc..eeb09ab 100644[m
[1m--- a/MainPage.html[m
[1m+++ b/MainPage.html[m
[36m@@ -16,11 +16,12 @@[m
     <div class="w3-top" class="header" id="home">[m
       <div class="w3-bar  w3-card w3-left-align w3-large heeder-large-screen" style="background-color: #000015;" >[m
         <a class="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-black w3-large " href="javascript:void(0);" onclick="myFunction()" title="Toggle Navigation Menu"><i class="fa fa-bars"></i></a>[m
[31m-        <a href="#home" class="w3-bar-item w3-button w3-padding-large  w3-hover-black">Mini-Boss</a>[m
         <div >[m
           <a href="#about" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-black" >About</a>[m
[31m-          <a href="#games" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-black"> Games</a>[m
[31m-          <a href="#shop" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-black">Shop</a>[m
[32m+[m[32m          <a href="#machine" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-black">Our Machine</a>[m
[32m+[m[32m          <a href="#history" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-black">History</a>[m
[32m+[m[32m          <a href="#joinUs" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-black">Join Us</a>[m
[32m+[m[32m          <a href="#outreach" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-black">Outreach</a>[m
           <a href="#events" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-black">Events</a>[m
           <a href="#contact" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-black">Contact</a>[m
         </div>[m
[36m@@ -30,8 +31,10 @@[m
       <!-- Navbar on small screens -->[m
       <div id="navDemo" class="w3-bar-block  w3-hide w3-hide-large w3-hide-medium w3-large">[m
         <a href="#about" class="w3-bar-item w3-button w3-padding-large"onclick="myFunction()">About</a>[m
[31m-        <a href="#games" class="w3-bar-item w3-button w3-padding-large"onclick="myFunction()">Games</a>[m
[31m-        <a href="#shop" class="w3-bar-item w3-button w3-padding-large" onclick="myFunction()">Shop</a>[m
[32m+[m[32m        <a href="#machine" class="w3-bar-item w3-button w3-padding-large"onclick="myFunction()">Our Machine</a>[m
[32m+[m[32m        <a href="#history" class="w3-bar-item w3-button w3-padding-large" onclick="myFunction()">History</a>[m
[32m+[m[32m        <a href="#joinUs" class="w3-bar-item w3-button w3-padding-large" onclick="myFunction()">Join Us</a>[m
[32m+[m[32m        <a href="#outreach" class="w3-bar-item w3-button w3-padding-large" onclick="myFunction()">Outreach</a>[m
         <a href="#events" class="w3-bar-item w3-button w3-padding-large" onclick="myFunction()">Events</a>[m
         <a href="#contact" class="w3-bar-item w3-button w3-padding-large" onclick="myFunction()">Contact</a>[m
       </div>[m
[36m@@ -65,145 +68,87 @@[m
          </div>[m
       </section>[m
       <main style="padding-bottom:40px ;">[m
[31m-        <h2 class="title" id="games">List of Games</h2>[m
[31m-        <div class="games">[m
[31m-          <div class="game-list">[m
[31m-            <img src="https://spaces.w3schools.com/images/playstation-brands.svg" alt="playstation-brands" style="width:100px; height: 100px;"/ >[m
[31m-          <h3>Playstation</h3>[m
[32m+[m[32m        <div class="machine" id="machine"></div>[m
[32m+[m[32m        <h2 class="title">Our Machine!</h2>[m
[32m+[m[32m        <div class="machine">[m
[32m+[m[32m          <div class="machine-list">[m
[32m+[m[32m          <h3>The 2023 machine's construction is yet to begin, but our team is excitedly looking forward to beginning[m[41m [m
[32m+[m[32m            its design and kicking off another great year. Last year's machine was an epic casino heist! Follow the[m[41m [m
[32m+[m[32m            thief as he steals the casino's precious ruby and makes his escape before kicking off a final goal in honor[m[41m [m
[32m+[m[32m            of the World Cup! To see more of our machines check out the machines or click the link below!</h3>[m
           <p></p>[m
           </div>[m
[31m-          <div class="game-list">[m
[31m-              <img src="https://spaces.w3schools.com/images/pacman.svg" alt="pacman" style="width:100px; height: 100px;"/>[m
[31m-            <h3>Pacman</h3>[m
[31m-            <p></p>[m
[31m-          </div>[m
[31m-          <div class="game-list">[m
[31m-              <img src="https://spaces.w3schools.com/images/spider.svg" alt="spiderman" style="width:100px; height: 100px;"/>[m
[31m-            <h3>Spiderman</h3>[m
[31m-            <p></p>[m
[31m-          </div>[m
[31m-          <div class="game-list">[m
[31m-              <img src="https://spaces.w3schools.com/images/monster.svg" alt="monster" style="width:100px; height: 100px;"/>  [m
[31m-            <h3>Monster</h3>[m
[31m-             <p></p>[m
[31m-          </div>[m
[31m-          <div class="game-list">[m
[31m-            <img src="https://spaces.w3schools.com/images/joker.svg" alt="joker" style="width:100px; height: 100px;"/ >[m
[31m-          <h3>Joker</h3>[m
[31m-          <p></p>[m
[31m-          </div>[m
[31m-          <div class="game-list">[m
[31m-              <img src="https://spaces.w3schools.com/images/halloween.svg" alt="halloween" style="width:100px; height: 100px;"/>[m
[31m-            <h3>Halloween</h3>[m
[31m-            <p></p>[m
[31m-          </div>[m
[31m-          [m
[31m-        [m
         </div>[m
[31m-        <div class="store" id="shop">[m
[31m-         <h2 class="title">Our Store</h2>[m
[31m-        [m
[31m-        <div class="game-store">[m
[31m-[m
[31m-          <div class="game-store-list">[m
[31m-            <div class="game-image">[m
[31m-              <img src="https://spaces.w3schools.com/images/dbgbyzFR8uI.jpg" alt="Photo by Katharina Gloth | Unsplash"/>[m
[31m-            </div>[m
[31m-            <div class="store-text-description">[m
[31m-             <h4>Keyboard</h4>[m
[31m-             <span> 12 items </span>[m
[31m-             <span>$9</span>[m
[31m-            </div>[m
[32m+[m[32m        <div class="history" id="history"></div>[m
[32m+[m[32m        <h2 class="title">History</h2>[m
[32m+[m[41m      [m
[32m+[m[32m      <div class="history">[m
 [m
[32m+[m[32m        <div class="history-list">[m
[32m+[m[32m          <div class="game-image">[m
[32m+[m[32m            <img src="TeamPhoto.JPG" alt="Photo by Alienware | Unsplash"/>[m
           </div>[m
[31m-          <div class="game-store-list">[m
[31m-            <div class="game-image">[m
[31m-              <img src="https://spaces.w3schools.com/images/qAgZDCgb7go.jpg" alt="Photo by Maverick Timotius | Unsplash"/>[m
[31m-            </div>[m
[31m-            <div class="store-text-description">[m
[31m-              <h4>Server</h4>[m
[31m-              <span> 15 items </span>[m
[31m-              <span>$50</span>[m
[31m-            </div>[m
[31m-[m
[32m+[m[32m          <div class="store-text-description">[m
[32m+[m[32m            <span>The 2022-2023 Team (shown above) was composed of a variety of talented and dedicated individuals who[m[41m [m
[32m+[m[32m              put in over three thousand hours to build an incredible machine.</span>[m
[32m+[m[32m            <h4>In the spring of 1998, the PSPE Chain Reaction Team  was founded by a freshman engineer named Shawn[m[41m [m
[32m+[m[32m              Jordan with the idea of creating a Rube Goldberg team for Purdue University. With the backing of then[m[41m [m
[32m+[m[32m              president, Karen Davis, the first team began work on their first ever machine. W