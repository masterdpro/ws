<script setup lang="ts">
const route = useRoute()
function newDoc() {
  window.location.assign("./about.vue")
}

</script>

<template #nav>
  
    <meta property="og:title" content="Discords.ca">

  <div>
    <nav class="navbar">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="../image/Vector.svg">
        </a>
      <div class="navbar-menu" id="navbarMenu">
        <a class="navbar-item" href="./servers">Server</a>
     <!-- <a class="navbar-item" href="/partner">Partner</a>
        <a class="navbar-item" href="/bot">bot</a>--> 
          
      </div>
      </div>
    </nav>
    <div class="is-background">  
      <img src="../image/Backgroundbg-v1.svg">
          <h1 class="title"> Welcome</h1>
          <div class="middle-box">
            <h1>What's discords.ca ?</h1>
            <h2>Discords.ca is a simple website with no real purpose. simply made by young dev because he had some time to waste! hope you'll like it ! I also have a <a href="https://discord.gg/Fy4EwEJCpV">discord server called Pro's & co</a> if you want to take a look</h2>
          </div>
    </div>
  </div>
  <footer>
    <a class="moche">Copyright © Discords.ca</a>
    <a class="moche">Contact @ Contact@discords.ca</a>
  </footer>
 
</template>

<style>
/* Navigation bar styles */
.navbar {
  display: flex;
  background-color: #46484E;
  color: #970808;
  position: fixed;
  top: 1%;
  width: 100%;
  height: 80px;
  border-radius: 50px;
  z-index: 1;
}

.navbar-brand {
  align-items: center;
  display: flex;
  margin-right: 2rem;
}

.navbar-item {
  position: relative;
  left: 20%;
  font-size: 35px;
  color: #ffffff;
  margin-right: 2rem;
  font-family: Arial, sans-serif;
  font-style: normal; /* add this line to reset the font style */
  
}
.navbar-item img{
  position: relative;
  left: -20%;
  top: 3%;
  width: 60px;
  height: 100px;
  color: #000000;
}

.navbar-item:hover {
  font-weight: bold;
}

.is-background{
  width: 100%;
  height: 100vh;
  overflow: hidden;;
}

.is-background img{
width: 100%;
height: auto;
object-fit: cover;

}



/* Text styles */
.title {
  font-size: 10vh;
  color:#FFFF;
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: bold;
  text-align: center;
  position: absolute;
  top: 15%;
  left: 35%;
}

footer{
  position: absolute;
width: 100%;
height: 112px;
top: 87vh;
background: #3C4048;
border-radius: 13px;
}
.moche{
  /* make that they are all in different line*/
  display: block;
  /* make the text in the middle*/
  text-align: center;
  /* make the text white*/
  color: #FFFFFF;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-size: 20px;
 /* make the text downer*/
  position: relative;
  top: 20%;
  margin-top: 10px;
}

.middle-box{
  position: absolute;
  top: 55%;
  left: 48%;
  transform: translate(-50%, -50%);
  width: 100vh;
  height: 40vh;
  opacity: 0.9;
  background: #27282b;
  border-radius: 26px;
}

.middle-box h2{
  position: absolute;
  top: 30%;
  left: 1%;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  margin-left: 10px;
  margin-right: 10px;
  font-weight:10;
  font-size: 20px;
  color: #FFFFFF;
}

.middle-box h1{
  position: relative;
  top: 5%;
  left: 30%;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  color: #FFFFFF;
}

a{
  color:#dce3ec;
  transition: 0.2s;

}

a:hover{
  color:#579cf7;
}


@media (max-width: 576px){

  .navbar{
    display: flex;
    background-color: #46484E;
    color: #970808;
    position: fixed;
    top: 1%;
    width: 100%;
    height: 80px;
    border-radius: 50px;
    z-index: 1;
  }
  .navbar-brand{
    display: flex;
    margin-right: 2rem;
  }
  .navbar-item{
    position: relative;
    left: 40%;
    font-size: 35px;
    color: #ffffff;
    margin-right: 2rem;
    font-family: Arial, sans-serif;
    font-style: normal; /* add this line to reset the font style */
  }
  .navbar-item img{
    position: relative;
    left: -20%;
    top: 3%;
    width: 60px;
    height: 100px;
    color: #000000;
  }
  .navbar-item:hover{
    font-weight: bold;
  }
  
  .is-background{
    width: 100%;
    height: 100vh;
    overflow: hidden;;
  }
  .is-background img{
    position: absolute;
  width: 100%;
  height: auto;
  left: 0px;
  top: 0px;
  margin: auto;
  min-width: 100%;
  min-height: 100%;
  transform: translate3d(0, 0, 0);
  z-index: -1;
  }

  .is-background img::before{
    content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: url('my-image.jpg') repeat-y;
  }

  

  .title{
    font-size: 7vh;
    color:#FFFF;
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: bold;
    position: relative;
    left: 0vh;
    top: 20vh;
  }
  footer{
    position: relative;
  width: 100%;
  height: 112px;
  left: 0px;
  top: -1vh;
  background: #3C4048;
  border-radius: 13px;
  }

  .middle-box{
  position: absolute;
  top: 55%;
  left: 48%;
  transform: translate(-50%, -50%);
  width: 55vh;
  height: 40vh;
  opacity: 0.9;
  background: #27282b;
  border-radius: 26px;
}

.middle-box h2{
  position: absolute;
  top: 30%;
  left: 1%;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  margin-left: 10px;
  margin-right: 10px;
  font-weight:10;
  font-size: 15px;
  color: #FFFFFF;
}

.middle-box h1{
  position: relative;
  top: 5%;
  left: 4%;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  color: #FFFFFF;
}

a{
  color:#dce3ec;
  transition: 0.2s;

}

a:hover{
  color:#579cf7;
}

  
}
</style>

