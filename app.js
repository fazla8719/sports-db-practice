const allPlayers=()=>{
    const searchValue = document.getElementById('search-box').value;
    // ekhane ekta api copy kore anlam...erpor se api te 1 ta nam silo .. sekhane dynamicaly auto change hoyar system korlam
    const url =`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}
    `;
    // er maddhome search er data ta ke deke anlam
    fetch(url)
    .then((response) =>response.json())
    .then((data)=>console.log(data));
    console.log(url);
}