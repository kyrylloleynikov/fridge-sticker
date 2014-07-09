define('app/sticker/list_component', ['react', 'app/sticker/component'], function(React, Sticker) {
    var StickerListComponent = React.createClass({displayName: 'StickerListComponent',
        getInitialState: function() {
            return {
                stickers: []
            };
        },
        componentWillMount: function() {
            var self = this;

            self.setState({stickers: self.props.stickers});

            self.props.stickers.on('add', function() {
                self.forceUpdate();
            });
        },
        updateZ: function(model) {
            this.props.onDrag(model);
        },
        render: function() {
            var self = this;

            var stickers = this.state.stickers.map(function(sticker) {
                return Sticker( {sticker_model:sticker, stickerID:sticker.get('id'), text:sticker.get('text'), zIndex:sticker.get('.zIndex'), bg_color:sticker.get('bg_color'), onDrag:self.updateZ} );
            });

            return (
                React.DOM.div( {className:"stickerList"},
                    stickers
                )
            );
        }
    });

    return StickerListComponent;
});