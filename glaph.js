function loadGlaph() {
    var glapharea = document.getElementById("glapharea").getContext('2d');
    var glaph = new Chart(glapharea, {
        type: 'line',
        data: {
            labels : getTime(),
            datasets : [
              {
                  label: "エアロゾル1",
                  borderColor : "red",
                  data : getEarozoru0(),
              },{
                  label: "エアロゾル2",
                  borderColor : "blue",
                  data : getEarozoru1(),
              },{
                  label: "気温",
                  borderColor : "lightgreen",
                  data : getKion(),
              },{
                  label: "気圧",
                  borderColor : "black",
                  data : getKiatu(),
              }
                
            ]
        },
        options: {
            elements: {
                line: {
                    tension: 0, // ベジェ曲線無効化
                }
            }
        }
    })
}

function getTime() {
    var hairetu = [];
    for(var x = 1; x < data.length; x++) {
        hairetu.push(data[x][8]);
    }
    return hairetu;
}

function getEarozoru0() {
    var hairetu = [];
    for(var x = 1; x < data.length; x++) {
        hairetu.push(data[x][1]);
    }
    return hairetu;
}

function getEarozoru1() {
    var hairetu = [];
    for(var x = 1; x < data.length; x++) {
        hairetu.push(data[x][2]);
    }
    return hairetu;
}

function getKion() {
    var hairetu = [];
    for(var x = 1; x < data.length; x++) {
        hairetu.push(data[x][3]);
    }
    return hairetu;
}

function getKiatu() {
    var hairetu = [];
    for(var x = 1; x < data.length; x++) {
        hairetu.push(data[x][4]);
    }
    return hairetu;
}