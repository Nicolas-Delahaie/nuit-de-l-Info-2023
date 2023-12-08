
window.addEventListener( "load", windowLoadHandler, false );

//for debug messages
var Debugger = function() { };
Debugger.log = function(message)
{
	try
	{
		console.log(message);
	}
	catch (exception)
	{
		return;
	}
}

function windowLoadHandler()
{
	canvasApp();
}

function canvasSupport()
{
	return Modernizr.canvas;
}

function canvasApp()
{
	if( !canvasSupport() )
	{
		return;
	}

// var sphereRad = 280;
	var radius = .8;

	var opt_display_dots = false;
	var words_cols = [ 	//	[	44,		62,		80		],
						//[	220,	31,		38		],
						//[	161,	177,	198		],
						//[	255,	241,	0		],
						//[	34,		184,	235		],
						//[	0,		255,	132		],
						//[	220,	31,		38		]
						[	0,		0,		0		],
						[	161,	0,		255		],
						[	255,	0,		187		],
						[	255,	46,		0		],
						[	0,		225,	255		]
					]
	var words_col;
	var words_col_nb = 5;

	var unicodeFlakes = [ //'❄', '❅', '❆', '❄', '❅', '❆', '❄', '❅', '❆', '❄', '❅', '❆', '❄', '❅', '❆',
						// DOMAINES IMPACTES /////////////////////////////////////////////////////////
						'Économie', 'Éducation', 'Environnement', 'Géopolitique', 'Politique', 'Science ', 
						'Santé', 'Sciences Humaines', 'Social', 'Technologie', 'Urbanisme', 'Science', 'Urbanisme', 
						'Science', 'Education', 'Health', 'Social', 'Environment', 'Human science', 'Politic', 
						'Social', 'Social', 'Technology', 'Social', 'Technologie', 'Urbanism', 'Economy', 'Racism', 
						'Women Issue', 'Human rights', 'peace', 'Busines', 'Ecologie', 'Religion', 'Cultural', 'Handicap', 
						'peace', 'ARTS', 'SOCIETY', 'Homosexuality', 'Urbanisme', 'Science', 'Agriculture', 'Cultural', 'Media', 
						'Freedom of expression', 'Homosexuality', 'Géopolitique', /* '錫' */, 'Media', /* '矽', '相', '共', */
						'Busines',/* '五' */, 'Technologie', 'Freedom of expression', /* '位', '素', */ 
						// DOMAINES D'EXPRESSION ///////////////////////////////////////////////////
						//'❄', '❅', '❆', '❄', '❅', '❆', '❄', '❅', '❆', '❄', '❅', '❆', '❅', '❆', 
						'Fine Arts', 'Video', 'Photography', 'Performance', 'Dance', 'Ballet', 'Multimedia', 'Digital Art', 
						'Cinema', 'Music', 'Theatre', 'Literature', 'Culinary', 'Fashion', 'Architecture', 'Neuroscience', 
						'Landscaping', /* '店', '定', '订', '丢', '东', '冬', '懂', '动', '都', '读', '独', 
						'度', '短', '对', '多', '饿', '儿', '而', '发', '法', '反', '饭', '方', '房', '放', 
						'飞', '非', '费', '分', '份', '风', '封', '夫', '服', '附', '父', '复', '该', '改', 
						'干', '感', '刚', '高', '告', '哥', '歌', '格', '个', '给', '号', '喝', '和', '河', 
						'贺', '黑', '很', '红', '后', '候', '湖', '护', '花', */ 'Urbanisme', /* '画', '话', '坏', '欢', 
						'还', '换', '黄', '回', '会', '婚', '活', */ 'Environnement', /* '或', '机', '鸡', '级', '极', '急', 
						'际', '济', '继', '寄', '加', '家', '假', '价', '力', '历', '丽', '联', '凉', '两', 
						'亮', '谅', '辆', '了', '林', '零', '六', '楼', '路', '录', '旅', '妈', '马', '码', 
						'吗', '买', '卖', '满', '慢', '忙', '猫', '毛', '贸', '么', '没', '每', '美', '妹', 
						'米', '面', '民', '明', '末', '母', '目', '拿', '哪', '那', '奶', '男', '南', '难', 
						'脑', '呢', '能', '你', '年', '念', '鸟', '您', '牛', '农', '努', '女', '暖', '欧', 
						'怕', '乓', '旁', '胖', '跑', '朋', '片', '漂', '票', '乒', '平', '期', '其', '奇', 
						'骑', '起', '气', '汽', '千', '前', '签', '轻', '清', '情', '请', '秋', '球', '区', 
						'取', '去', '趣', '全', '然', '让', */ 'Science ', /* '售', '书', '术', '树', '双', '谁', '水', 
						'睡', '说', '司', '思', '死', '四', '送', '诉', '算', '虽', '岁', '孙', '所', '他', 
						'她', */ 'Technology', /* '台', '太', '谈', '汤', '堂', '套', '特', '踢', '提', '题', '体', '天', 
						'填', '条', '铁', '听', '厅', '庭', '通', */ 'Freedom of expression', /*'头', '图', '外', '玩', '完', '晚', 
						'万', '王', '网', '往', '忘', '望', '卫', '为', '位', '文', */ 'Économie', /* '卧', '五', '午', 
						'务', '物', '西', '吸', '希', '息', '习', '牙', '亚', '烟', '言', '羊', '阳', '样', 
						'药', '要', '也', '业', '夜', '一', '衣', '医', '已', '以', '易', '意', '因', '音', 
						'印', '银', '应', '英', '影', */ 'Handicap', /* '用', '邮', '油', '游', '友', */ 'Busines', /* '又', '右', 
						'鱼', '愉', '雨', '语', '元', '员', '园', */ 'Environment', /* '远', '院', '愿', '月', '在', '早', 
						'怎', '张', '找', '照', '者', '这', '真', '正', '证', '知', '只', '之', '直', '止', 
						'纸', '至', '治', '中', '钟', '种', '重', '周', '洲', '主', '住', '助', '祝', '注', 
						'专', '准' */];

	
	var theCanvas = document.getElementById( "canvasOne" );
	var context = theCanvas.getContext("2d");
	var globe_spheres = [];
	var imgdata = [];
	var imgdata_sx
	var imgdata_sy

	var screen_x;
	var screen_y;
	var screen_x_half;
	var screen_y_half;
	var screen_half;		// we will pick the max from x and y

	//	var screenScale = 1000;
	var globe_rotation = 0;
	var globe_radius = 100.;
	var globe_isReadyAnimation = false;

	var Vector = function (x, y, z)
	{
		this.x = x;
		this.y = y;
		this.z = z;
	}


	var Particle = function( x, y, z, colorsArrIndex )
	{
		this.pos = new Vector( x, y, z );
		this.posModel = new Vector( x, y, z );
		this.GenerateColorFromImgIndex( colorsArrIndex );
	}
	Particle.prototype.GenerateColorFromImgIndex = function (i)
	{
		this.grey = imgdata[i * 4 + 0] / 256.;
	    //this.r = 0;
	    //this.g = 256-v;
	    //this.b = v;
	    //this.a = 0;
	}


	var Sphere = function( x,y, radius, numPointsX, numPointsY )
	{
	    this.pos = new Vector( x, y, 1 );
	    this.particles = [];
	    this.GeneratePoints( x,y, radius, numPointsX, numPointsY );
	    this.radius = radius
	}
	Sphere.prototype.GeneratePoints = function( x, y, radius, num, num2 )
	{
	    x = x / 2;
	    y = y / 2;
	    num = Math.floor(num);
	    var angle = 2 * Math.PI / num;
	    var angle2 = Math.PI / num2;
	    for( var j = 0; j <= num2; j++ )
	    {
	    	for( var i = 0; i < num; i++ )
	   	 	{
	            var rx = radius * Math.cos(angle * i) * Math.sin(angle2 * j);
	            var rz = radius * Math.sin(angle * i) * Math.sin(angle2 * j);
	            var ry = radius * Math.cos(angle2 * j);
	            this.particles.push( new Particle( x+rx, y+ry, rz, j*num+i ) );
	        }
	    }
	}

	function create_globe()
	{
	    var img = new Image();
	    img.crossOrigin = "";
	    img.src = "https://res.cloudinary.com/dt89j2wbq/image/upload/v1475680622/worldmap-small_bw9sas.png";
	    img.onload = function ()
	    {
			var imgWidth = 100;
			var imgHeight = 50;
			var fa = 2
	        context.translate( imgWidth*fa, imgHeight*fa );
	        context.scale( -1, -1 );
	        context.drawImage( img, 0, 0, imgWidth*fa, imgHeight*fa );
	        imgdata = context.getImageData( 0, 0, imgWidth*fa, imgHeight*fa ).data;
	        //maa compensate to leave context back in his original state
	        context.scale( -1, -1 );
	        context.translate( -imgWidth*fa, -imgHeight*fa );

	        //context.clearRect(0, 0, imgWidth, imgHeight);
	        globe_spheres.push( new Sphere( 0, 0, globe_radius, imgWidth*fa, imgHeight*fa ) );
	        globe_isReadyAnimation = true;
	    }
	}											



	Sphere.prototype.RotateAxisY = function (angle)
	{
	    var sin = Math.sin(angle);
	    var cos = Math.cos(angle);
	    for( var i = 0; i < this.particles.length; i++ )
	    {
	    	var p = this.particles[i];
	    	var posModel =  p.posModel
	    	var pos =  p.pos
	        posModel.x = pos.x * cos - pos.z * sin;
	        posModel.y = pos.y;
	        posModel.z = pos.x * sin + pos.z * cos;
	    }
	}

	Sphere.prototype.Draw = function( ctx, angle )
	{
  		//context.fillStyle = "rgba(255,255,255,255 )"
		//context.fillRect( screen_x_half, screen_y_half, 10, 10 );

		//ctx.beginPath();
		var scale = 300;	//	focal in fact
		

		var f = radius * screen_half / this.radius;
		ctx.strokeStyle = "rgba(" + 0 + "," + 50 + "," + 170 + "," + 1 + ")";
		ctx.fillStyle 	= "rgba(" + 150 + "," + 220 + "," + 50 + "," + .6 + ")";
		var f_size = screen_half / 700.;
	    var sin = Math.sin(angle);
	    var cos = Math.cos(angle);
		var part = this.particles
		for( var i = 0; i < part.length; i++ )
		{
			var p = part[i]
			//var pos = p.posModel;
	    	var src =  p.pos
	        var x = src.x * cos - src.z * sin;
	        var y = src.y;
	        var z = src.x * sin + src.z * cos;

			var scale_over = f * scale / (scale-z);
			//var a = (this.particles[i].posModel.z + (imgWidth / 2)) / imgWidth;
			//var a = 1.;
			//if (a > 0.2)
			{
				x = x * scale_over + screen_x_half;
				y = y * scale_over + screen_y_half;
				
				var v = p.grey;
				var size =  (1-v) * 12 + 3;
				size *= f_size;
				
				if( z < 0. )
					size *= 0.5;
				else if( z < 30. )
					size *= .5 + .5 * (z - 0.) / (30.-0.);

				if( v > .5 )
					ctx.strokeRect( x-size*.5, y-size*.5, size, size );
				else
				{
					size *= .8;
					ctx.fillRect( x-size*.5, y-size*.5, size, size );
				}
/*				if( z > 30. ) // devant derriere found value by experementing, related to screenScale
				{
					//ctx.fillRect( this.pos.x + x, this.pos.y + y, 2, 2);
					//ctx.fillStyle = "rgba(" + 128 + "," + 128 + "," + 128 + "," + (a*.5) + ")";
					//ctx.fillRect( x-3, y-3, 9, 9 );
					ctx.fillStyle = "rgba(" + p.r + "," + p.g + "," + p.b + "," + a + ")";
					ctx.fillRect( x, y, 3, 3 );
				}
				else
				{
					ctx.fillStyle = "rgba(" + p.r + "," + p.g + "," + p.b + "," + a + ")";					//ctx.fillRect( this.pos.x + x, this.pos.y + y, 2, 2);
					ctx.fillRect( x, y, 1, 1 );
				}
*/
			}
		}
		//ctx.fillRect( screen_x_half, screen_y_half, 10, 10 );

	}

	var timer;
	var wait;
	var count;
	var part_by_frame_float;
	var part_by_frame_accum;
	var particleList;
	var recycleBin;
	var fLen;
	var zMax;
	var globe_center;
	var particleRad;
	var zeroAlphaDepth;
	///////////////////
	//we are defining a lot of variables used in the screen update functions globally so that they don't have to be redefined every frame.
	
	///////////
	init();

	////////////////////////////////////////////////////
	function get_info_from_context()
	{
    	theCanvas.width  = window.innerWidth  * .9;
   		theCanvas.height = window.innerHeight * .9;

		screen_x 		= theCanvas.width
		screen_y 		= theCanvas.height;
		screen_x_half	= screen_x * .5;
		screen_y_half	= screen_y * .5;
		if( screen_x_half < screen_y_half )
			screen_half = screen_x_half;
		else
			screen_half = screen_y_half;
	}

	/////////////////////////////////////////////////////////////////
	// INITIALLI
	function init()
	{
		wait = 1; // fait patienter les mot augmenter limite l'affichage simultanée //origine = 1
		count = wait -1;
		part_by_frame_float = .4;
		part_by_frame_accum = 0;
		
		get_info_from_context();
	
		//particle color
		/*r = 250; 
		g = 1;
		b = 218; */

		//////////////////////TEST COULEUR qui fonctionne une foi////////
								
		fLen = 320; //represents the distance from the viewer to z=0 depth.

		//we will not draw coordinates if they have too large of a z-coordinate (which means they are very close to the observer).
		zMax = fLen-2;
		
		particleList = {};
		recycleBin = {};
		
		var gravity = -0; //try changing to a positive number (not too large, for example 0.3), or negative for floating upwards. // ORIGINAL = -0
		
		particleRad = 2.5; //ORIGINE = 2.5
		
		globe_center = new Vector( 0, 0, -3 );	//maa	was		-3 - sphereRad;
		
		//alpha values will lessen as particles move further back, causing depth-based darkening:
		zeroAlphaDepth = -250; // CONTROLE LA DENSITE origin = 750
		
		timer = setInterval(onTimer, 10/24);

		words_col
		var col = words_cols[ Math.max( Math.floor( Math.random()*(words_col_nb-.0001) ), 0 ) ];
		var f = Math.random() * .5 + .5
		words_col = [ Math.floor(col[0]*f), Math.floor(col[1]*f), Math.floor(col[2]*f) ];
		//words_col = words_cols[0];

		create_globe();
	}
	/////////////////////////TU EN EST ICI ET CA NE MARCHE PAS ENCORE////////////////////////////////
	/*function loadLoop() {  
	var r = Math.floor(Math.random() * 255);
	var g = Math.floor(Math.random() * 255);
	var b = Math.floor(Math.random() * 255);
	
	var color = 'rgb(' + r + ',' + g + ',' + b + ')';
	
	// $('html').css('background', color);
	//$('head').append('<meta content="' + color + '" name="theme-color">');
	//$('body').append(color).css('color', color);

	setTimeout(function(){
		color.reload(); //origine location a la olace de color
	}, 10);
	}                               */
	//////////////////////////////////////////////////////////TU EN EST AU DESSUS ET CA NE MARCHE PAS ENCORE//////////////////
	function onTimer()
	{
		get_info_from_context();

		//if enough time has elapsed, we will add new particles.		
		count++;
		if( count >= wait )
		{					
			count = 0;
			part_by_frame_accum += part_by_frame_float;
			for( i = 0; i < part_by_frame_accum; )
			{
				part_by_frame_accum -= 1;

				var theta = Math.random()*2*Math.PI;
				var phi = Math.acos(Math.random()*12-1); // gerer mon affichages des particule ds le temps

				//	maa removed
				//x0 = sphereRad * Math.sin(phi)*Math.cos(theta);
				//y0 = sphereRad * Math.sin(phi)*Math.sin(theta);
				//z0 = sphereRad * Math.cos(phi);

				var x0 = Math.sin(phi) * Math.cos(theta);
				var y0 = Math.sin(phi) * Math.sin(theta);
				var z0 = Math.cos(phi);
				
				//We use the addParticle function to add a new particle. The parameters set the position and velocity components.
				
				//Note that the velocity parameters will cause the particle to initially fly outwards away from the sphere center (after
				//it becomes unstuck).
				var p = addParticle(	x0, globe_center.y + y0, globe_center.z + z0,
										0.002*x0, 0.002*y0, 0.002*z0
									);
				
				
				
				//we set some "envelope" parameters which will control the evolving alpha of the particles.
				p.attack = 50; //50
				p.hold = 300; //50
				p.decay = 300; //100
				p.initValue = 0;
				p.holdValue = 1.;
				p.lastValue = 0;
				
				//the particle will be stuck in one place until this time has elapsed:
				p.stuckTime = 350 + Math.random()*200;
				
				p.acc = new Vector( 0, 0, 0 );

				//loadLoop()
			}
		}
		
		//update viewing angle
		var globle_sin = Math.sin(globe_rotation);
		var globle_cos = Math.cos(globe_rotation);

		//background fill
		context.fillStyle = "#fff"; // arriere plan de la sphere
		context.fillRect( 0, 0, screen_x, screen_y );

  		globe_rotation -= 0.005;
		if( globe_isReadyAnimation )
    		globe_spheres[0].Draw( context, globe_rotation );
		else
		{
			//	useful for debug
	  		//	context.fillStyle = "rgba(255,0,0,255 )"
			//	context.fillRect( screen_x_half, screen_y_half, 10, 10 );
		}

		//update and draw particles
		context.font = (3 + screen_half / 20 ) + "px Verdana"; // Taille du texte

		var p = particleList.first;
		var nextParticle;
		while( p != null )
		{
			//before list is altered record next particle
			nextParticle = p.next;

			//update age
			p.age++;
			
			//if the particle is past its "stuck" time, it will begin to move.
			var pos = p.pos;
			if( p.age > p.stuckTime )
			{
				var vel = p.vel;
				var acc = p.acc;
				var acc_f = 0.0001;

				vel.x += acc.x + acc_f * (Math.random()*2 - 1);
				vel.y += acc.y + acc_f * (Math.random()*2 - 1);
				vel.z += acc.z + acc_f * (Math.random()*2 - 1);
				
				pos.x += vel.x;
				pos.y += vel.y;
				pos.z += vel.z;
			}
			
			/*
			We are doing two things here to calculate display coordinates.
			The whole display is being rotated around a vertical axis, so we first calculate rotated coordinates for
			x and z (but the y coordinate will not change).
			Then, we take the new coordinates (x_rot, y, z_rot), and project these onto the 2D view plane.
			*/

			var z = globe_center.z;
			var x_rot =   globle_cos*pos.x + globle_sin*(pos.z - z);
			var z_rot =  -globle_sin*pos.x + globle_cos*(pos.z - z) + z;
			var m = radius * screen_half * fLen / (fLen - z_rot);
			var x = x_rot*m + screen_x_half;
			var y = pos.y*m + screen_y_half;
			
			//update alpha according to envelope parameters.
			if( p.age < p.attack + p.hold + p.decay )
			{
				if( p.age < p.attack )
				{
					p.alpha = (p.holdValue - p.initValue) / p.attack*p.age + p.initValue;
				}
				else if( p.age < p.attack + p.hold )
				{
					p.alpha = p.holdValue;
				}
				else
				{
					p.alpha = (p.lastValue - p.holdValue)/p.decay*(p.age-p.attack-p.hold) + p.holdValue;
				}
			}
			else
			{
				p.dead = true;
			}
			
			//see if the particle is still within the viewable range.
			var outsideTest = (x>screen_x) || (x<0) || (y<0) || (y>screen_y) || (z_rot>zMax);
			
			if( outsideTest||p.dead )
			{
				recycle(p);
			}			
			else
			{
				//depth-dependent darkening
				var r = words_col[0];
				var g = words_col[1];
				var b = words_col[2];	

				//////////////////////////////////////		
				var rgbString = "rgba("+r+","+g+","+b+","; //partial string for color which will be completed by appending alpha value.

				var depthAlphaFactor = (1-z_rot/zeroAlphaDepth) * 10. + .4;
				depthAlphaFactor = (depthAlphaFactor > 1) ? 1 : ((depthAlphaFactor<0) ? 0 : depthAlphaFactor); //DENSITE encore
				context.fillStyle = rgbString + depthAlphaFactor*p.alpha + ")";
        /*ADD TEXT function!*/
        /*ADD TEXT function!*///////////////////////////////////////////////////////////////////////////////////////////////////
				
        /*ADD TEXT function!*//////////////////////////////////////////////////////////////////////////////////////////////////////
				//context.fillStyle = "rgba(255,255,255,255 )"
				context.fillText( p.flake, x, y );

		/*ADD TEXT function!*/
			//	context.fillStyle = loadLoop();
        /*ADD TEXT function!*/
			//	context.fillStyle = 'red';
        /*ADD TEXT function!*/
        /*ADD TEXT function!*/
				//draw
       			if(opt_display_dots)
       			{
					context.beginPath();
       				context.arc( x, y, m*particleRad, 0, 2*Math.PI, false);
					context.closePath();
					context.fill();
				} // DENSITE encore

			}
			
			p = nextParticle;
		}
	}
		
	function addParticle( x0,y0,z0, vx0,vy0,vz0 )
	{
		var newParticle;
		var color ;
			
		//check recycle bin for available drop:
		if( recycleBin.first != null )
		{
			newParticle = recycleBin.first;
			//remove from bin
			if( newParticle.next != null )
			{
				recycleBin.first = newParticle.next;
				newParticle.next.prev = null;
			}
			else
			{
				recycleBin.first = null;
			}
		}
		//if the recycle bin is empty, create a new particle (a new ampty object):
		else
		{
			newParticle = {};
		}
		
		//add to beginning of particle list
		newParticle.prev = null;
		newParticle.next = particleList.first;
		if( particleList.first )
		{
			particleList.first.prev = newParticle;
		}
		particleList.first = newParticle;

		
		//initialize
		newParticle.pos = new Vector( x0, y0, z0 );
		newParticle.vel = new Vector( vx0, vy0, vz0 );

		newParticle.age = 1;
		newParticle.dead = false;
    
    	newParticle.flake = unicodeFlakes[Math.floor(Math.random() * unicodeFlakes.length)];
		
		//origin = 0.5
		newParticle.right = Math.random() < 0.1;

		return newParticle;		
	}
	/////////////////////////////////////////////////////////////////
	
	///////////////////////////////////////////////////
	
	function recycle(p)
	{
		//remove from particleList
		if (particleList.first == p)
		{
			if (p.next != null)
			{
				p.next.prev = null;
				particleList.first = p.next;
			}
			else
			{
				particleList.first = null;
			}
		}
		else
		{
			if (p.next == null)
			{
				p.prev.next = null;
			}
			else
			{
				p.prev.next = p.next;
				p.next.prev = p.prev;
			}
		}
		//add to recycle bin
		if (recycleBin.first == null)
		{
			recycleBin.first = p;
			p.prev = null;
			p.next = null;
		}
		else
		{
			p.next = recycleBin.first;
			recycleBin.first.prev = p;
			recycleBin.first = p;
			p.prev = null;
		}
	}	

}


//////////////////////////// LE SLIDER //////////////////////
/*$(function() {
    $( "#slider-range" ).slider({
      range:false,
      min: 2,  //20
      max: 20,  //500
      value: 280, //280
      slide: function( event, ui ) {
         console.log(ui.value);
        sphereRad = ui.value;
      }
    });
  });

$(function() {
    $( "#slider-test" ).slider({
      range:false,
      min: 1.0, //1.0
      max: 2.0, //2.0
      value: 1, //1
      step:0.001, //0.01
      slide: function( event, ui ) {
        radius_sp = ui.value;
      }
    });
  })*/;