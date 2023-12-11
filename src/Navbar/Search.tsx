import '../Navbar/search.css'
interface SearchProps {
    results: any[]; 
  }
  
    const Search: React.FC<SearchProps> = ({ results}) => {
    console.log(results)
    const lineStyle = {
      width: '1px',
      height: '12px',
      backgroundColor: 'rgba(.0 , .0 ,.0 ,.4)', 
      padding:'0px',
      margin:' 13px 10px'
    };

    return (
        <div className='inputWrapper'>
        <div className="resultsList">
              {results.map((result) => (
        <div className='searchFlex'>
          {result.Name.length>0 &&<>
            <div className='searchImageWrap'>
              <img className='searchImage' src="https://b.zmtcdn.com/data/pictures/1/20252881/ba484f49867bc81039e1b7813fdbb436_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A" alt="" />
            </div>
            <div className='searchDetails'>
            <div className='searchResultName'>{result.Name}</div>
            <div className='ratingWrap'>
            
            <div className='ratingColor'>
                <div className='ratingColor1'>{result.Rating}
                <div className='searchSvg'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12">
                 <path d="M6.76 6.8l-6.38 0.96c-0.22 0.040-0.38 0.22-0.38 0.44 0 0.12 0.040 0.24 0.12 0.32v0l4.64 4.76-1.1 6.66c0 0.020 0 0.040 0 0.080 0 0.24 0.2 0.44 0.44 0.44 0.1 0 0.16-0.020 0.24-0.060v0l5.7-3.12 5.68 3.12c0.060 0.040 0.14 0.060 0.22 0.060 0.24 0 0.44-0.2 0.44-0.44 0-0.040 0-0.060 0-0.080v0l-1.1-6.66 4.64-4.76c0.080-0.080 0.12-0.2 0.12-0.32 0-0.22-0.16-0.4-0.36-0.44h-0.020l-6.38-0.96-2.96-6.18c-0.060-0.12-0.18-0.2-0.32-0.2s-0.26 0.080-0.32 0.2v0z" fill="white"></path>
                </svg></div>
                </div>
                
                <div className='SearchDeliveryText'>DELIVERY</div>
                </div>
                <div style={lineStyle}></div>
              
                <div className='ratingColor'>
                
                <div className='ratingColor1'>{result.Rating}
                <div className='searchSvg'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12">
                <path d="M6.76 6.8l-6.38 0.96c-0.22 0.040-0.38 0.22-0.38 0.44 0 0.12 0.040 0.24 0.12 0.32v0l4.64 4.76-1.1 6.66c0 0.020 0 0.040 0 0.080 0 0.24 0.2 0.44 0.44 0.44 0.1 0 0.16-0.020 0.24-0.060v0l5.7-3.12 5.68 3.12c0.060 0.040 0.14 0.060 0.22 0.060 0.24 0 0.44-0.2 0.44-0.44 0-0.040 0-0.060 0-0.080v0l-1.1-6.66 4.64-4.76c0.080-0.080 0.12-0.2 0.12-0.32 0-0.22-0.16-0.4-0.36-0.44h-0.020l-6.38-0.96-2.96-6.18c-0.060-0.12-0.18-0.2-0.32-0.2s-0.26 0.080-0.32 0.2v0z" fill="white"></path>
                </svg></div>
                </div>
                <div className='SearchDeliveryText'>DINING</div>
                </div>
    
            </div>
            <div className='searchLocation'>{result.Location}</div>
            </div>
          </>}
            </div>
                
        ))}
      </div>        
      </div>
    );
  };
  export default Search
  