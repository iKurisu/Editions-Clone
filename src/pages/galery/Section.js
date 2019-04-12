import PropTypes from 'prop-types';
import "./Section.scss";

class Section extends React.Component {
  state = { offX: 0, offY: 0 };

  getOffset(position, size, range) {
    const percent = position * 100 / size;
    return range * percent / 100 - range / 2;
  }

  mouseMove = e => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    const offX = this.getOffset(clientX, innerWidth, 28);
    const offY = this.getOffset(clientY, innerHeight, 18);

    this.setState({ offX, offY });
  }

  render() {
    const { offX, offY } = this.state;
    const { artwork, title, details, orientation, colors } = this.props;

    return (
      <section className={`section`} onMouseMove={this.mouseMove}>
        <div className="content-wrapper">
          <Image title={title} artwork={artwork} orientation={orientation} />
          <Title title={title} style={{ transform: `translate(${offX}px, ${offY}px)`, color: colors.font }} />
          <Details {...details} />
        </div>
      </section>
    );
  }
Section.propTypes = {
  artwork: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  details: PropTypes.object.isRequired,
  orientation: PropTypes.string.isRequired,
  colors: PropTypes.object.isRequired
}

export default Section;