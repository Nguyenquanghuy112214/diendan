import React from 'react';
import PropTypes from 'prop-types';
// img
import { imgNewsPage } from '~/assets/img/newspage';
// Css module
import classNames from 'classnames/bind';
import styles from './_NewsIntroduceDetail.module.scss';
const cx = classNames.bind(styles);
function NewsIntroduceDetail() {
  const { imgnews, imgavt } = imgNewsPage;
  return (
    <div className={cx('wrapper')}>
      <div className={cx('wrapper-content')}>
        <div className={cx('title')}>Thoughts and words</div>
        <div className={cx('description')}>Pitch termsheet backing validation focus release.</div>
        <div className={cx('img')}>
          <img src={imgnews} alt="" />
        </div>
      </div>
      <div className={cx('wrapper-auth-date')}>
        <div className={cx('auth')}>
          <img src={imgavt} alt="" />
          Chandler Bing
        </div>
        <div className={cx('cate-date')}>
          <div className={cx('category')}>Category</div>
          <div className={cx('date')}>November 22, 2021</div>
        </div>
      </div>
      <div className={cx('content')}>
        Getting ready to procure managed services to help support or augment your security team? You’re not alone: 62% of organizations said
        they plan to outsource some or all of their IT security functions in 2022, according to the Foundry.Before going down that route,
        it’s wise to gather your requirements and think about the services you want from a managed security services provider (MSSP). There
        are a several basic considerations when choosing your service provider, including: the MSSP’s experience, the types of support and
        services they offer, and how their service level agreements are structured. You’ll also want to know the MSSP’s specific domains of
        expertise and how they correlate with your needs. Getting ready to procure managed services to help support or augment your security
        team? You’re not alone: 62% of organizations said they plan to outsource some or all of their IT security functions in 2022,
        according to the Foundry.Before going down that route, it’s wise to gather your requirements and think about the services you want
        from a managed security services provider (MSSP). There are a several basic considerations when choosing your service provider,
        including: the MSSP’s experience, the types of support and services they offer, and how their service level agreements are
        structured. You’ll also want to know the MSSP’s specific domains of expertise and how they correlate with your needs. Getting ready
        to procure managed services to help support or augment your security team? You’re not alone: 62% of organizations said they plan to
        outsource some or all of their IT security functions in 2022, according to the Foundry.Before going down that route, it’s wise to
        gather your requirements and think about the services you want from a managed security services provider (MSSP). There are a several
        basic considerations when choosing your service provider, including: the MSSP’s experience, the types of support and services they
        offer, and how their service level agreements are structured. You’ll also want to know the MSSP’s specific domains of expertise and
        how they correlate with your needs. Getting ready to procure managed services to help support or augment your security team? You’re
        not alone: 62% of organizations said they plan to outsource some or all of their IT security functions in 2022, according to the
        Foundry.Before going down that route, it’s wise to gather your requirements and think about the services you want from a managed
        security services provider (MSSP). There are a several basic considerations when choosing your service provider, including: the
        MSSP’s experience, the types of support and services they offer, and how their service level agreements are structured. You’ll also
        want to know the MSSP’s specific domains of expertise and how they correlate with your needs. Getting ready to procure managed
        services to help support or augment your security team? You’re not alone: 62% of organizations said they plan to outsource some or
        all of their IT security functions in 2022, according to the Foundry.Before going down that route, it’s wise to gather your
        requirements and think about the services you want from a managed security services provider (MSSP). There are a several basic
        considerations when choosing your service provider, including: the MSSP’s experience, the types of support and services they offer,
        and how their service level agreements are structured. You’ll also want to know the MSSP’s specific domains of expertise and how
        they correlate with your needs.
      </div>
    </div>
  );
}

NewsIntroduceDetail.propTypes = {};

export default NewsIntroduceDetail;
