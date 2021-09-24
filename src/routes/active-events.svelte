<script context="module">
  export const load = async ({ fetch }) => {
    const res = await fetch("/data/active-events.json");
    const events = await res.json();
    console.log(events)
    return {
      props: {
        events,
      },
    };
  };
</script>

<script>
  import '../css/theme.css';
  export let events;
  function getdate(i){
    var date = new Date(i);
    return date.toDateString();
  }
  function gettime(i){
    var date = new Date(i);
    return date.toLocaleTimeString();
  }
</script>


  <div class="events">
    <h1 class='text_center heading'>Upcoming Events</h1>
    {#each events as event}
      <div class="event">
        <div class="club-image-div">
          <img class="club-image" src={event.image.webp} alt="{event.name}'s image">
          <br><br>
        </div>
        <div class="club-name-div"><h3 class="club-name">{event.name}</h3></div>
        <div class='description'>
          <h1 class="event-name">{event.eventName}</h1>
          <p>{event.eventDescription}</p>
          <a href={event.link}>Event link</a>
      </div> 
      <div class='date-time-div'>
          <h2 class="text">{getdate(event.datetime)}<br>{gettime(event.datetime)}</h2>
      </div>
      </div>
    {/each}
  </div>
    
<style>
    .event{
    position: relative;
    margin:50px;
    border-radius:60px;
    background-color:var(--app-color-light);
  }
  .club-image-div{
    margin:10px 10px 20px 10px;
    padding:20px;
    display:inline-block;
    width:20%;
    
  }
  .club-image{
    border-radius: 30px;
    width: 120px;
    }
  .club-name{
    font-size: 22px;
    font-weight: 600;
    font-family:var(--app-main-font-family);
  }
  .club-name-div{
    position:absolute;
    bottom:10px;
    left:38px;
    
  }
  .description{
    padding:20px;
    display:inline-block;
    width:50%;
    text-align:center;
    font-family:var(--app-main-font-family);
  }
  .date-time-div{
    
    position:absolute;
    top:0;
    bottom:0;
    right:0;
    border-radius:0px 60px 60px 0px;
    width:20%;
    margin:0;
    padding:10px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    color:var(--app-color-primary-contrast);
    background-color:var(--app-color-primary);
  }
  
  .text{
    font-family:var(--app-main-font-family);
    font-size:22px;
    font-weight: 600;
  }
  .text_center{
    text-align:center;
  }
  .heading{
    margin:20px;
    font-family: var(--app-heading-font-family);
    color:var(--app-color-light);
  }
  a{
    font-size:25px;
  }
  @media screen and (max-width: 900px) and (min-width:778px) {
    .event{
    margin:20px;
    
  }
    .club-image-div{
    margin:15px;
    padding:20px;
  }
  .club-image{
    border-radius: 30px;
    width: 150px;
    }
  .description{
    padding:25px;
  }
  .text{
    font-size:19px;
  }
  a{
    font-size:20px;
  }
}
@media screen and (max-width: 778px)  {
  .event{
    margin:15px;
    border-radius:30px;
  }
  .club-image-div{
    position:absolute;
    padding:10px;
    width:15%;
  }
  .description{
    position:relative;
    left:10%;
    padding:120px 10px 10px 10px;
    width:80%;
  }
  .club-image{
    border-radius: 30px;
    width:100px;
    }
    .date-time-div{
    
    position:absolute;
    top:0;
    height:fit-content;
    right:30px;
    border-radius:0px 0px 30px 30px;
    width:25%;
    padding:10px;
    display: flex;
    
    align-items:initial;
    }
    .text{
    font-size:16px;
    font-weight: 600;
  }
  .club-name-div{
    position:absolute;
    top:30px;
    left:40%;
  }
  a{
    font-size:20px;
  }

}
@media screen and (max-width: 500px)  {
  .event{
    margin:25px 10px 25px 10px;
    border-radius:30px;
  }
  .description{
    position:relative;
    left:7%;
    padding:120px 10px 10px 10px;
    width:85%;
  }
  .club-name-div{
    position:absolute;
    top:90px;
    left:35%;
  }
  .club-image-div{
    position:absolute;
    padding:10px;
    width:15%;
  }
  .club-image{
    border-radius: 10px;
    width:70px;
    }
    .club-name{
    font-size: 20px;
    font-weight: 600;
  }
  .date-time-div{
    width:40%;
  }
  .text{
    font-size:14px;
    font-weight: 600;
  }
  .event-name{
    
    font-size: 30px;
  }
  .heading{
    font-size:35px;
  }
}
</style>
