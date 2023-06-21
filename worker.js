function r(max) {
  return Math.floor(Math.random() * max + 1);
}

export default {
  async fetch(request, env, ctx) {
    return new Promise((res, rej) => {
      fetch("https://cdn.jsdelivr.net/gh/hitokoto-osc/sentences-bundle@1.0.306/categories.json")
        .then(resp => resp.json())
        .then(j => {
          fetch("https://cdn.jsdelivr.net/gh/hitokoto-osc/sentences-bundle@1.0.306/" + (j[r(j.length)] || j[0]).path)
            .then(resp => resp.json())
            .then(j => {
              res(new Response(JSON.stringify(j[r(j.length)] || j[0])))
            })
        })
    })
  },
};
