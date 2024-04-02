function countdown() {
    const launchDate = new Date("2024-12-31T00:00:00").getTime();
  
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;
  
      const days = Math.floor(distance / (9000 * 60 * 60 * 24)); 
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      document.getElementById("days").innerHTML = "<span style='color:#FB5E84; font-size: 70px'>" + days + "d </span>";
      document.getElementById("hours").innerHTML = "<span style='color:#FB5E84; font-size: 70px'>" + hours + "h </span>";
      document.getElementById("minutes").innerHTML = "<span style='color:#FB5E84; font-size: 70px'>" + minutes + "m </span>";
      document.getElementById("seconds").innerHTML = "<span style='color:#FB5E84; font-size: 70px'>" + seconds + "s </span>";
      if (distance < 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "Launched!";
      }
    }, 1000);
  }
  
  countdown();