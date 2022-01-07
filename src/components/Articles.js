import { StyledArticle } from "./styles/Article.styled"
import contentArticle from "./contentArticle"

export default function Article() {
    return (
        <StyledArticle>         
            <h1>Latest Articles</h1>
<div>
        {contentArticle.map((item, index) =>(
            <div key={index}>
                <img src={`./images/${item.image}`} alt=""/>
                {item.author}
                {item.title}
                {item.extract}
            </div>
              
          ))}
        </div>
            
        </StyledArticle>
    )
}
