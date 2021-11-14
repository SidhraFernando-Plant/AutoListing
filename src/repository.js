export function foo(inputs) {
        var featuresCode = '';
        for(var i=0; i<inputs.features.length; i++) {
            featuresCode += `<li>${inputs.features[i]}</li>\n`;
        }
        var minRequirementsCode = '';
        if(inputs.minReqs!==null&&inputs.minReqs.length!==0) {
            for(var j=0; j<inputs.minReqs.length; j++) {
                minRequirementsCode += `<li>${inputs.minReqs[j]}</li>\n`;
            }
        }
        else {
            minRequirementsCode = 'N/A';
        }
        var recRequirementsCode = '';
        if(inputs.recReqs!==null&&inputs.recReqs.length!==0) {
            for(var k=0; k<inputs.recReqs.length; k++) {
                recRequirementsCode += `<li>${inputs.recReqs[k]}</li>\n`;
            }
        }
        else {
            minRequirementsCode = 'N/A';
        }
        
        var CODE_TEMPLATE = `<p><span style="font-size: 28px;"><span style="color: rgb(255, 255, 255);"><strong>
        ${inputs.name}
        </strong></span></span>
        </p>

        <p><span style="font-size: 28px;"><span style="color: rgb(255, 255, 255);"><strong></strong></span></span><img
                src="https://s3.amazonaws.com/images.ecwid.com/images/wysiwyg/product/44160194/350616155/1621345090175192324972/Battle_netGames_Delivery_png"
                width="468" height="92"><span class="redactor-invisible-space"></span><br>
        </p>
        <p>
            <iframe width="500" height="280" src="${inputs.youtube}" title="YouTube video player"
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen=""><span id="selection-marker-1" class="redactor-selection-marker"></span><span
                id="selection-marker-1" class="redactor-selection-marker"></span>
            </iframe>
        </p>

        <p>
            <span style="color: rgb(255, 255, 255);"><span style="font-size: 24px;">
            <br>
            <strong>About ${inputs.name}</strong></span></span>
        </p>

        <p><span style="font-size: 18px;">${inputs.description}</span>
        </p><span style="font-size: 18px;"><br></span>
        
        <p><br>
        </p>
        
        <div>
            <h2><span style="font-size: 24px;"><span style="color: rgb(255, 255, 255);">Key features</span></span></h2>
            <div>
                <ul>
                    ${featuresCode}
                </ul>
                <div>
            </div>
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

