<script>
    const clubs=[{
        clubName:"Club Name",
        yearActive:"20-21",
        coName1:"Name1",
        coName2:"Name2"
    },{
        clubName:"Club Name",
        yearActive:"20-21",
        coName1:"Name1",
        coName2:"Name2"
    },{
        clubName:"Club Name",
        yearActive:"20-21",
        coName1:"Name1",
        coName2:"Name2"
    },{
        clubName:"Club Name",
        yearActive:"20-21",
        coName1:"Name1",
        coName2:"Name2"
    }]
    
    </script>
    <main>
    <h1 class="a">Past cores</h1>
    
    <div class="c">
    {#each clubs as club }
    <div class="b" >
    <h2 class="d" >{club.clubName}</h2>
    <p class="e">{club.yearActive}</p>
    <h2>Coordinators</h2>
    <h2>{club.coName1}</h2>
    <h2>{club.coName2}</h2>
    </div>
    {/each}
    </div>

    </main>
<style>
    main
    {
    padding: 25PX;
    background-color:var(--app-color-dark);
}
    .a
    {
        text-align: center;   
        color:var(--app-color-light);
    }
    .c
    {   
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
    h2 {
	font-size: 1.618rem;
}
.d{
    margin-bottom:0px;
}
.e{
    margin-top: 0px;
}
    .b
    {
        padding:10px;
        background-color:var(--app-color-shell);
        text-align: center;
        color:var(--app-color-dark);
        margin:5px;
        border-radius:10%;
        
        shape-outside: margin-box;
    }
    @media only screen and (max-width:1110px)

{
    .c
    {
        display: block;
        
    }
    .b{
        margin-bottom: 20px;
    }
}
</style>    