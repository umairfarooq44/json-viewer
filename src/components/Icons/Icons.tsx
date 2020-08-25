import React from 'react';

type IconProps = {
  style?: Object;
};

export class ArrowRight extends React.PureComponent<IconProps> {
  render() {
    const { props } = this;
    const { style, ...rest } = props;

    return (
      <span {...rest}>
        <svg
          style={{
            ...getIconStyle(style).style,
            paddingLeft: '2px',
            verticalAlign: 'top',
            color: 'rgb(249, 150, 226)',
          }}
          viewBox='0 0 15 15'
          fill='currentColor'
        >
          <path d='M0 14l6-6-6-6z'></path>
        </svg>
      </span>
    );
  }
}

export class ArrowDown extends React.PureComponent<IconProps> {
  render() {
    const { props } = this;
    const { style, ...rest } = props;

    return (
      <span {...rest}>
        <svg
          style={{
            ...getIconStyle(style).style,
            paddingLeft: '2px',
            verticalAlign: 'top',
            color: 'rgb(59, 72, 227)',
          }}
          viewBox='0 0 15 15'
          fill='currentColor'
        >
          <path d='M0 5l6 6 6-6z'></path>
        </svg>
      </span>
    );
  }
}

function getIconStyle(style: any) {
  if (!style) {
    style = {};
  }
  return {
    style: {
      verticalAlign: 'middle',
      ...style,
      height: '1em',
      width: '1em',
    },
  };
}
