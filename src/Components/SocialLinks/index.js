import React from 'react';
import { css } from 'emotion';

const image = offset => css`
  margin-right: ${offset || 'auto'};

  &:last-child {
    margin-right: 0;
  }

  }
`;

class SocialNet extends React.Component {
  render() {
    const { offset, color } = this.props;
    return (
      <div>
        <a href="http://facebook.com" className={image(offset)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="36"
            viewBox="0 0 49.652 49.652"
          >
            <path
              d="M24.826 0C11.137 0 0 11.137 0 24.826c0 13.688 11.137 24.826 24.826 24.826 13.688 0 24.826-11.138 24.826-24.826C49.652 11.137 38.516 0 24.826 0zM31 25.7h-4.039v14.396h-5.985V25.7h-2.845v-5.088h2.845v-3.291c0-2.357 1.12-6.04 6.04-6.04l4.435.017v4.939h-3.219c-.524 0-1.269.262-1.269 1.386v2.99h4.56L31 25.7z"
              fill="#dedede"
            />
          </svg>
        </a>
        <a href="http://twitter.com" className={image(offset)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="35"
            viewBox="0 0 49.652 49.652"
          >
            <path
              d="M24.826 0C11.137 0 0 11.137 0 24.826c0 13.688 11.137 24.826 24.826 24.826 13.688 0 24.826-11.138 24.826-24.826C49.652 11.137 38.516 0 24.826 0zm11.075 19.144c.011.246.017.494.017.742 0 7.551-5.746 16.255-16.259 16.255-3.227 0-6.231-.943-8.759-2.565.447.053.902.08 1.363.08 2.678 0 5.141-.914 7.097-2.446a5.72 5.72 0 0 1-5.338-3.969 5.76 5.76 0 0 0 2.58-.096 5.715 5.715 0 0 1-4.583-5.603l.001-.072a5.69 5.69 0 0 0 2.587.714 5.71 5.71 0 0 1-2.541-4.755c0-1.048.281-2.03.773-2.874a16.225 16.225 0 0 0 11.777 5.972 5.707 5.707 0 0 1-.147-1.303 5.714 5.714 0 0 1 9.884-3.91 11.406 11.406 0 0 0 3.63-1.387 5.74 5.74 0 0 1-2.516 3.162 11.36 11.36 0 0 0 3.282-.899 11.494 11.494 0 0 1-2.848 2.954z"
              fill="#dedede"
            />
          </svg>
        </a>
        <a href="http://google.com" className={image(offset)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 112.196 112.196"
            width="36"
            height="35"
          >
            <circle cx="56.098" cy="56.097" r="56.098" fill="#dedede" />
            <g fill={color}>
              <path d="M19.531 58.608c-.453-11.927 9.994-22.949 21.933-23.092 6.085-.519 12.005 1.844 16.61 5.698-1.889 2.077-3.811 4.13-5.864 6.052-4.054-2.463-8.935-4.34-13.673-2.673-7.642 2.176-12.27 11.199-9.442 18.675 2.342 7.808 11.839 12.093 19.282 8.813 3.854-1.38 6.395-4.936 7.51-8.757-4.417-.088-8.835-.033-13.252-.155-.011-2.628-.022-5.246-.011-7.874 7.366-.011 14.743-.033 22.12.033.453 6.439-.497 13.33-4.683 18.498-5.732 7.377-16.322 9.542-24.937 6.648-9.143-3.003-15.792-12.214-15.593-21.866zM79.102 48.668h6.57c.012 2.198.033 4.407.045 6.604 2.197.022 4.406.033 6.604.044v6.582l-6.604.033c-.022 2.209-.033 4.406-.045 6.615-2.197-.011-4.396 0-6.582 0-.021-2.209-.021-4.406-.044-6.604-2.197-.023-4.406-.033-6.604-.045v-6.582c2.198-.011 4.396-.022 6.604-.044.011-2.196.033-4.405.056-6.603z" />
            </g>
          </svg>
        </a>
      </div>
    );
  }
}

export default SocialNet;
