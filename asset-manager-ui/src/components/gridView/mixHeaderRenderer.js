import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'reactstrap';
import { ContextMenuProvider } from 'react-contexify';
import PropTypes from 'prop-types';

import MixMenu from './mixMenu';
import { showMixPanel } from '../../actions';

export class MixHeaderRenderer extends React.Component {
  render() {
    return (
      <div className="ag-header-cell-label">
        <NavLink href="#" onClick={this.props.showMixPanel}>
          {this.props.column.colDef.headerName}
        </NavLink>
        <ContextMenuProvider id={`mix_menu_${this.props.column.colDef.headerName}`} event="onClick">
          <div>
            <button>...</button>
            <MixMenu isMixHeader menuId={`mix_menu_${this.props.column.colDef.headerName}`} />
          </div>
        </ContextMenuProvider>
      </div>
    );
  }
}

MixHeaderRenderer.propTypes = {
  showMixPanel: PropTypes.func.isRequired,
};

export default connect(null, { showMixPanel })(MixHeaderRenderer);
