		//define the widget giving it a namespace and name
		//see also https://msdn.microsoft.com/en-us/library/hh404085.aspx
		//thanks to: http://stackoverflow.com/questions/13867704/proper-way-to-create-an-instance-variable-using-jquery-ui-widget-factory
		$.widget("custom.carousel_auto",
		{
			options:{interval:5000}, 
			//private method
			_create: function()
			{
				this.start();

				this.element
					.addClass("carousel_auto");
			},
			
			stop: function()
			{
				clearInterval(this.t);
			},
			
			start: function()
			{
				this.t = setInterval
				(
					animateAlert, //function to run every so many seconds
					this._limitInterval(this.options.interval) //interval before changing, in milliseconds
				);
				
				function animateAlert()
				{
					var item_width = $('.car li').outerWidth();
				
					var left_indent = parseInt($('.car').css('left')) - item_width;
				
					$('.car').animate
					(	
						{'left':left_indent}, 
						300, 
						function()
						{
							$('.car li:last').after($('.car li:first'));
							$('.car').css({'left' : ''});
							//$('.car').css({'transition' : 'opacity 2s'});
							//$('.car').css({'opacity' : '0'});
						}
					);
				}
			},
						
			_limitInterval: function(interval)
			{
				if(interval != 5000)
				{
					interval = 5000;
				}
				
				/*if (interval < 500)
				{
					interval = 500;
				}*/
				
				return interval;
			}
			
		});
