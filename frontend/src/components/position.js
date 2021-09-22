// let target = document.getElementById('find-me');

// target.addEventListener('click', eventFunc);

// function eventFunc(){
//   // クリックされた時の処理を書く
//   console.log('click');
// }

const position = () => {

    return (
        <div>
        <button id = "find-me">Show my location</button><br/>
        <p id = "status"></p>
        <a id = "map-link" target="_blank"></a>
        </div>
        )

}

export default position
