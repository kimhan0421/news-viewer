import React, {useEffect, useState} from 'react';
import { NewsListBlock } from './Styles';
import NewsItem from './NewsItem';
import axios from 'axios';

// const sampleArticle = {
//   title: '제목',
//   description: '내용',
//   url: 'https://google.com',
//   urlToImage: 'https:via.placeholder.com/160',
// };

const NewsList = ({category}) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoadiing] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoadiing(true);
      try{
        const query = category === 'all' ? '' : `&category=${category}`;
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=77cf3acc777344c79bb862bbc3bd5df6`,);
        setArticles(response.data.articles);
      }catch(e){
        console.log(e);
      }
      setLoadiing(false);
    };
    fetchData();
  }, [category]);

  //대기중
  if (loading){
    return <NewsListBlock>대기중 ...</NewsListBlock>
  }
  //articles값이 설정되지 않았을 때
  if(!articles){
    return null;
  }

  //articles값이 유효 할때
  return (
    <NewsListBlock>
      {/* <NewsItem article={sampleArticle} /> */}
      {articles.map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  )
}

export default NewsList;
