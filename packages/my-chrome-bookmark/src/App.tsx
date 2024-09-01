import React, { useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [bookmarks, setBookmarks] = useState<any[]>([]);

  useEffect(() => {
      // 向 background 发送消息以获取书签数据
      chrome.runtime.sendMessage({ action: "getBookmarks" }, (response) => {
          if (response && response.bookmarks) {
              setBookmarks(response.bookmarks);
          }
      });
  }, []);

  const recursiveRender = (bookmarks: any[]) => {
    return (bookmarks || []).map((bookmark) => (
      <li key={bookmark.id}>
          {bookmark.title}
          {bookmark.children && bookmark.children.length > 0 && (
              <ul>
                  {/* {bookmark.children.map((child: any) => ( */}
                    {recursiveRender(bookmark.children)}
                      {/* // <li key={child.id}>{child.title}</li> */}
                  {/* ))} */}
              </ul>
          )}
      </li>
  ))
  }
  return (
    <div>
        <h1>书签列表</h1>
        <ul>
            {bookmarks.map((bookmark) => (
                <li key={bookmark.id}>
                    {bookmark.title}
                    {bookmark.children && bookmark.children.length > 0 && (
                        <ul>
                            {bookmark.children.map((child: any) => (
                                <li key={child.id}>{child.title}</li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
            {recursiveRender(bookmarks)}
        </ul>
    </div>
);
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
