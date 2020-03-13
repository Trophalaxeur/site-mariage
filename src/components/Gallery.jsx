import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import * as _ from 'lodash';

import Section from 'grommet/components/Section';
import './Gallery.scss';

const PREFIX_URL = '/static/media/galleries/';
const EXTENSION = '.jpg';
const PREFIX_IMG = '';
const PREFIX_THUMB = 'thumb.';

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showIndex: false,
      slideOnThumbnailHover: false,
      showBullets: true,
      infinite: true,
      showThumbnails: true,
      showFullscreenButton: true,
      showGalleryFullscreenButton: true,
      showPlayButton: false,
      showGalleryPlayButton: true,
      showNav: true,
      slideDuration: 450,
      slideInterval: 2000,
      thumbnailPosition: 'left',
      showVideo: {},
      prefixUrlWithName: `${PREFIX_URL}${props.name}/`
    };
  }

  render() {
    const images = _.range(29).map((imageId) => ({
      original: `${this.state.prefixUrlWithName}${PREFIX_IMG}${imageId}${EXTENSION}`,
      thumbnail: `${this.state.prefixUrlWithName}${PREFIX_THUMB}${imageId}${EXTENSION}`
      // description: `Custom class for slides & thumbnails IMG ${imageId}`
    }));

    return (
      <Section direction="column" appCentered size={{ height: 'large' }} colorIndex="neutral-3">
        <ImageGallery
          items={images}
          lazyLoad={false}
          infinite={this.state.infinite}
          showBullets={this.state.showBullets}
          showFullscreenButton={this.state.showFullscreenButton && this.state.showGalleryFullscreenButton}
          showPlayButton={this.state.showPlayButton && this.state.showGalleryPlayButton}
          showThumbnails={this.state.showThumbnails}
          showIndex={this.state.showIndex}
          showNav={this.state.showNav}
          thumbnailPosition={this.state.thumbnailPosition}
          slideDuration={this.state.slideDuration}
          slideInterval={this.state.slideInterval}
          slideOnThumbnailHover={this.state.slideOnThumbnailHover}
        />
      </Section>);
  }
}

Gallery.propTypes = {
  name: PropTypes.string.isRequired
};

Gallery.defaultProps = {
};

export default Gallery;
