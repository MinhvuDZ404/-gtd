// Independently tuned values. Not extracted or asserted to match BUSIDOL balance.
export const TOWERS = [
 {id:'archer',name:'Ranger Keep',role:'Rapid • single target',color:'#78b04c',cost:90,damage:19,range:190,rate:.68,projectile:'arrow',rarity:'COMMON'},
 {id:'cannon',name:'Iron Bastion',role:'Explosive • area damage',color:'#db8d48',cost:145,damage:42,range:175,rate:1.8,projectile:'shell',splash:66,rarity:'RARE'},
 {id:'frost',name:'Frost Spire',role:'Magic • slows enemies',color:'#65cddd',cost:130,damage:14,range:185,rate:1.1,projectile:'ice',slow:.48,rarity:'RARE'},
 {id:'storm',name:'Storm Sanctum',role:'Lightning • chain attack',color:'#af86de',cost:180,damage:30,range:180,rate:1.35,projectile:'bolt',chain:3,rarity:'EPIC'},
 {id:'flame',name:'Ember Citadel',role:'Fire • area damage',color:'#f07d4a',cost:160,damage:27,range:165,rate:.95,projectile:'fire',splash:52,rarity:'EPIC'},
 {id:'gold',name:'Sun Sentinel',role:'Radiant • armor piercing',color:'#ecc65a',cost:210,damage:66,range:215,rate:1.65,projectile:'sun',pierce:true,rarity:'LEGENDARY'}
];
export const HEROES=[
 {id:'lyra',name:'Lyra',title:'Warden of the woods',color:'#81b965',skill:'Arrow storm',description:'A volley strikes every enemy for 95 damage.',damage:95,cooldown:24},
 {id:'orin',name:'Orin',title:'Keeper of embers',color:'#f2a05a',skill:'Meteor fall',description:'Burn every enemy for 140 damage.',damage:140,cooldown:32},
 {id:'astra',name:'Astra',title:'Voice of winter',color:'#86d7ed',skill:'Winter’s grasp',description:'Deal 65 damage and freeze enemies for 4 seconds.',damage:65,cooldown:27,freeze:4}
];
export const ENEMIES={goblin:{name:'Moss raider',hp:65,speed:62,armor:0,reward:12,damage:1},beetle:{name:'Ironback',hp:145,speed:43,armor:5,reward:18,damage:1},runner:{name:'Wild runner',hp:48,speed:98,armor:0,reward:13,damage:1},brute:{name:'Stonebreaker',hp:300,speed:33,armor:8,reward:28,damage:2},wisp:{name:'Dusk spirit',hp:85,speed:76,armor:2,reward:16,damage:1},boss:{name:'Briarhorn, Forest Tyrant',hp:1800,speed:23,armor:10,reward:180,damage:10}};
export const STAGES=Array.from({length:12},(_,i)=>({id:i+1,name:['Woodland Outpost','The Old Crossing','Briar Hollow','Whispering Grove','Ruined Watch','Emerald Pass','Amber Fields','Forgotten Keep','Moonlit Marsh','The Sunken Road','Tyrant’s Approach','Heart of the Wild'][i],waves:5+Math.floor(i/3),modifier:1+i*.22,reward:160+i*45,biome:i<4?'Verdant woodland':i<8?'Ancient frontier':'Twilight wilds'}));
export const PATH=[[-50,235],[220,235],[285,280],[285,435],[355,485],[605,485],[675,420],[675,255],[745,205],[935,205],[1000,270],[1000,440],[1080,490],[1320,490]];
export const SITES=[[150,335],[360,185],[420,365],[530,575],[585,295],[780,345],[830,115],[895,565],[1100,325],[1160,585]];
export function waveData(stage,wave){const types=['goblin','runner','beetle','goblin','wisp','brute'];const count=7+wave*2;return Array.from({length:count},(_,i)=>({type:wave===stage.waves&&i===count-1?'boss':types[(i+wave-1)%Math.min(types.length,wave+2)],at:i*.85}));}
export function validateContent(){for(const t of TOWERS) for(const k of ['cost','damage','range','rate']) if(!Number.isFinite(t[k])||t[k]<=0)throw Error(`Invalid ${t.id}.${k}`);return true;}
