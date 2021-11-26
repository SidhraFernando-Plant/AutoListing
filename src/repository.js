export function foo(inputs) {
        var descCode = '';
        if(inputs.description!==null&&inputs.description.length!==0) {
            for(var i=0; i<inputs.description.length; i++) {
                if(inputs.description[i]!=="") {
                    descCode += `<p>${inputs.description[i]}</p>\n`;
                }
                else {
                    descCode += `<p><br></p>\n`;
                }
                
            }
        }
        var minRequirementsCode = '';
        if(inputs.minReqs!==null&&inputs.minReqs.length!==0) {
            for(var j=0; j<inputs.minReqs.length; j++) {
                if(inputs.minReqs[j]!=="") {
                    minRequirementsCode += `<li>${inputs.minReqs[j]}</li>\n`;
                }
                else {
                    minRequirementsCode = 'N/A';
                }
            }
        }
        var recRequirementsCode = '';
        if(inputs.recReqs!==null&&inputs.recReqs.length!==0) {
            for(var k=0; k<inputs.recReqs.length; k++) {
                if(inputs.recReqs[k]!=="") {
                    recRequirementsCode += `<li>${inputs.recReqs[k]}</li>\n`;
                }
                else {
                    recRequirementsCode = 'N/A';
                }
            }
        }
        var imageLink = '';
        if(inputs.keyType==='origin') {
            imageLink ="https://s3.amazonaws.com/images.ecwid.com/images/wysiwyg/product/44160194/306457095/162134564661413991652/OriginGames_Delivery_png";

        }
        else if(inputs.keyType==='gog') {
            imageLink = "https://s3.amazonaws.com/images.ecwid.com/images/wysiwyg/product/44160194/305850934/1622291733793-196836020/GOG_COM_GAMES_Delivery_png";
        }
        else if(inputs.keyType==='steam') {
            imageLink = "https://s3.amazonaws.com/images.ecwid.com/images/wysiwyg/product/44160194/305844974/1621338183808-1285240008/STEAM_Delivery_png";

        }
        
        var CODE_TEMPLATE = `<p><span style="font-size: 28px;"><span style="color: rgb(255, 255, 255);"><strong>
        ${inputs.name}
        </strong></span></span>
        </p>

        <p><span style="font-size: 28px;"><span style="color: rgb(255, 255, 255);"><strong></strong></span></span><img
                src=${imageLink}
                width="468" height="92"><span class="redactor-invisible-space"></span><br>
        </p>
        <p>
            ${inputs.youtube}
        </p>

        <p>
            <span style="color: rgb(255, 255, 255);"><span style="font-size: 24px;">
            <br>
            <strong>About ${inputs.name}</strong></span></span>
        </p>

        ${descCode}
        </p><span style="font-size: 18px;"><br></span>
        
        
        <div>
            
            <div>
                
            <br>
		    <h3>Critic Rating</h3>
		    <iframe style="border-radius: 5px; background-image: linear-gradient(to right, #2a2a2a, #1e1e1e);" src="https://opencritic.com/game/${inputs.openCritic}/score?theme=dark" frameborder="0" height="102">
		    </iframe><br>
		    <span style="color: rgb(84, 141, 212);"><br>
		    </span>
            <div>
                <div style="background:#111014; padding: 12px 10px 5px 20px; border-radius:10px;">
                    <p><span style="font-size: 24px;"><strong>System requirements:</strong></span>
                    </p>
                    <h3><span style="font-size: 18px;">Recommended requirements</span></h3>
                    <ul>
                        ${recRequirementsCode}
                    </ul>
                    <h3><span style="font-size: 18px;">Minimum requirements</span></h3>
                    <ul>
                        ${minRequirementsCode}
                    </ul>
                </div>
            </div>
            <p><br>
            </p>
        </div>
    </div>
    `
    return CODE_TEMPLATE;
}

