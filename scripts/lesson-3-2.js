/**
 *? Повернути масив унікальних тегів
 *? Очікуваний результат ['js', 'nodejs', 'html', 'css', 'react']
 */
 const tweets = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
  ];
  function gatTags(arr) {
    const arrTags = arr.flatMap(item => item.tags);
     return arrTags.filter((item, index) => index === arrTags.indexOf(item))
   
  }
  console.log(gatTags(tweets));