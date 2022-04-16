import React from 'react';
import { Result } from 'antd';


function PageNotFound() {
  return <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<a href='/' type="primary">Back Home</a>}
    />
  </div>;
}

export default PageNotFound;
