// telephone validation
let inp = document.querySelector('#tel');

inp.addEventListener('focus', _ => {
      if (!/^\+\d*$/.test(inp.value))
            inp.value = '+';
});

inp.onclick = function () {
      inp.value = "+7";
}

var old = 0;
inp.addEventListener('keypress', e => {
      if (!/\d/.test(e.key))
            e.preventDefault();

      var curLen = inp.value.length;

      if (curLen < old) {
            old--;
            return;
      }

      if (curLen == 2)
            inp.value = inp.value + "(";

      if (curLen == 6)
            inp.value = inp.value + ")-";

      if (curLen == 11)
            inp.value = inp.value + "-";

      if (curLen == 14)
            inp.value = inp.value + "-";

      if (curLen > 16)
            inp.value = inp.value.substring(0, inp.value.length - 1);

      old++;
});