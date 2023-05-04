import PropTypes from 'prop-types';

// Css module
import classNames from 'classnames/bind';
import styles from './_Button.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
export default function Button({
  to,
  href,
  primary = false,
  outline = false,
  join = false,
  text = false,
  rounded = false,
  disabled = false,
  small = false,
  large = false,
  search = false,
  children,
  className,
  leftIcon,
  rightIcon,
  onClick,
  ...passProps
}) {
  let Comp = 'button';
  const props = {
    onClick,
    ...passProps,
  };

  // Remove event listener when btn is disabled
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  const classes = cx('wrapper', {
    [className]: className,
    primary,
    outline,
    join,
    text,
    disabled,
    rounded,
    small,
    large,
    search,
  });
  return (
    <Comp className={classes} {...props}>
      {leftIcon && (
        <span className={cx('icon')}>
          <img src={leftIcon} alt="leftIcon" />
        </span>
      )}
      <span className={cx('title')}>{children}</span>
      {rightIcon && (
        <span className={cx('icon')}>
          <img src={rightIcon} alt="leftIcon" />
        </span>
      )}
    </Comp>
  );
}

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  text: PropTypes.bool,
  rounded: PropTypes.bool,
  disabled: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  onClick: PropTypes.func,
};
