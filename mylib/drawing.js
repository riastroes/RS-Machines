function Drawing(dwidth, dheight){
  this.pg = createGraphics(dwidth, dheight);
  this.agents = [];
  this.images = [];
  this.imagepos =[];
  this.palette =[];
  
}
Drawing.prototype.createAgentPalette = function(palette){
  for(var index in this.agents){
    //elke agent wordt gekoppeld aan een kleur
    append(this.palette, palette[int(random(palette.length))]);
  }
}
Drawing.prototype.add = function(img, imgpos, agentpos, agentsize){
  append(this.images, img);
  append(this.imagepos, imgpos);
  for(var i = 0; i < agentpos.length ; i += 1){
    
    var agent =  new Agent(img, agentpos[i], agentsize, this.agents.length);
    append(this.agents, agent);
  }
  
  this.pg.image(img,imgpos.x, imgpos.y);
  
};

Drawing.prototype.update = function( ){
  
  for(var index in this.images){
    for(var a in this.agents){
      var agent = this.agents[a];
        if(agent.img == this.images[index]){
        if(agent.search(pal.colors[1])){
          
          var pos = agent.pos.copy();
          pos.add(this.imagepos[index]);
          
          style.pg(this.pg, pal.colors[0], this.palette[agent.nr], 1);
          this.pg.ellipse(pos.x,pos.y, agent.size, agent.size);
        }
        else{
          
          agent.pos = agent.lastpos.copy();
        }
      }
    }
  }
  
  // for(var index in this.images){
  //   for(var a in this.agents){
  //     var agent = this.agents[a];
  //       if(agent.img == this.images[index]){
  //       if(agent.search(pal.colors[1])){
          
  //         var pos = agent.pos.copy();
  //         pos.add(this.imagepos[index]);
  //         var colnr = agent.nr % colcolors.length;
  //         style.pg(this.pg, pal.colors[1], colcolors[colnr], 1);
  //         this.pg.ellipse(pos.x,pos.y, 10,10);
  //       }
  //       else{
          
  //         agent.pos = agent.lastpos.copy();
  //       }
  //     }
  //   }
  // }
};

