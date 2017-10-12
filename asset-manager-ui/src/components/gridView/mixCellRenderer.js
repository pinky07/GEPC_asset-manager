import React from 'react';
import PropTypes from 'prop-types';

class MixCellRenderer extends React.Component {
  render() {
    return (
      <div>
        {Number(this.props.value.mix1.value/100).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:0})}
      </div>
    );
  }
}

MixCellRenderer.propTypes = {
  value: PropTypes.object,
};

export default MixCellRenderer;