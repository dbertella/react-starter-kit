

var Detail = React.createClass({displayName: "Detail",
	showDetail: function () {
		// var activeDocuments = document.querySelectorAll('.active');
		// console.log(activeDocuments.length);
		// if (activeDocuments.length > 0) {
		// 	//.classList.remove('active');
		// 	[].forEach.call(document.querySelectorAll('.detail'), function(item) {
		// 	    item.listClass.remove('active');
		//     });
				
		// }
		this.setState({
			active: true
		});

	},
	hideDetail: function () {
		this.setState({
			active: false
		});
	},
	getInitialState: function() {
		return { 
			active: false 
		};
	},
	render: function () {
		
	    // <img src={this.props.imgListing} />
	    var cx = React.addons.classSet;
	    var className = cx({
			"detail": true,
			"active": this.state.active
        });
	    return (
	    	React.createElement("div", {className: className, onClick: this.showDetail}, 
	    		React.createElement(Box, {title: this.props.title, subTitle: this.props.subTitle, imgListing: this.props.imgListing}), 
	    		React.createElement("div", {className: "single-detail"}, 
	    			React.createElement("header", null, 
	    				React.createElement("a", {onClick: this.hideDetail}, "Home"), 
	    				React.createElement("div", {className: "heading"}, "POWER")
	    			), 
	    			React.createElement("section", null, 
	    				React.createElement("img", {src: "img/scheda_01.jpg", alt: ""}), 
	    				React.createElement("img", {src: "img/scheda_02.jpg", alt: ""})
	    			)
	    		)
	    	)
	    );
	}
});

var Box = React.createClass({displayName: "Box",
	render: function(){
		var style = {
			backgroundImage: "url(" + this.props.imgListing + ")"
		}; 
		return (
			React.createElement("div", {className: "box"}, 
				React.createElement("div", {className: "img", style: style}), 
		    	React.createElement("div", {className: "box-heading"}, 
			    	React.createElement("h3", null, this.props.title), 
			    	React.createElement("p", null, this.props.subTitle)
		    	)
			)
		);
	}
});

var Listing = React.createClass({displayName: "Listing",
	// style={style} onTouchStart={this.onTouchStart} onTouchMove={this.onTouchMove} onTouchEnd={this.onTouchEnd}

	render: function () {
		
		var style = {
			width: (this.props.data.length) * 16.875 + "em"
		};

		return (
			
			React.createElement("div", {className: "home-listing", style: style},  this.props.data.map(function (s) {

				return React.createElement(Detail, {key: s.id, title: s.title, subTitle: s.subTitle, imgListing: s.img_listing});
			}, this))
		);
	}
});

React.render(React.createElement(Listing, {data:  data }), document.getElementById('line-1'));
