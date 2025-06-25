const apiKey = "a823a83d6bf941de891917dbcd956c55";
const url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=a823a83d6bf941de891917dbcd956c55`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log("뉴스 받아옴:", data);

        const container = document.getElementById("main-article");

        const article = data.articles[0];

        container.innerHTML = `
        <h2>${article.title}</h2>
        <p class="byline">
            <time datetime="${article.publishedAt}">
            ${new Date(article.publishedAt).toLocaleDateString('ko-KR')}
            </time> · ${article.author || article.source.name}
        </p>
        <hr class="section-divider">
        <section>
            <figure style="text-align: center;">
            <img src="${article.urlToImage}" alt="뉴스 이미지" style="max-width: 100%; height: auto;">
            </figure>
            <p>${article.description || article.content || "내용 없음"}</p>
        </section>
        `;
    })
    .catch(error => {
        console.error("API 호출 실패:", error);
        document.getElementById("main-article").innerHTML = "<p>뉴스를 불러올 수 없습니다.</p>";
    });