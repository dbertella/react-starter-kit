

var Detail = React.createClass({
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
	    	<div className={className} onClick={this.showDetail}>
	    		<Box title={this.props.title} subTitle={this.props.subTitle} imgListing={this.props.imgListing} />
	    		<div className="single-detail">
	    			<header>
	    				<a onClick={this.hideDetail}>Home</a>
	    				<div className="heading">POWER</div>
	    			</header>
	    			<section>
	    				<img src="img/scheda_01.jpg" alt="" />
	    				<img src="img/scheda_02.jpg" alt="" />
	    			</section>
	    		</div>
	    	</div>
	    );
	}
});

var Box = React.createClass({
	render: function(){
		var style = {
			backgroundImage: "url(" + this.props.imgListing + ")"
		}; 
		return (
			<div className="box">
				<div className="img" style={style}></div>
		    	<div className="box-heading">
			    	<h3>{this.props.title}</h3>
			    	<p>{this.props.subTitle}</p>
		    	</div>
			</div>
		);
	}
});

var Listing = React.createClass({
	// style={style} onTouchStart={this.onTouchStart} onTouchMove={this.onTouchMove} onTouchEnd={this.onTouchEnd}

	render: function () {
		
		var style = {
			width: (this.props.data.length) * 16.875 + "em"
		};

		return (
			
			<div className="home-listing" style={style}>{ this.props.data.map(function (s) {

				return <Detail key={s.id} title={s.title} subTitle={s.subTitle} imgListing={s.img_listing} />;
			}, this)}</div>
		);
	}
});

React.render(<Listing data={ data } />, document.getElementById('line-1'));
