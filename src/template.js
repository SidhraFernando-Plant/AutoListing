function foo() {
    var name = '';
    var youtube = '';
    var about = '';
    var features = [];
    var featuresCode = '';
    for(var i=0; i<features.length; i++) {
        featuresCode += `<li>${features[i]}</li>`;
    }
    var CODE_TEMPLATE = `<p><span style="font-size: 28px;"><span style="color: rgb(255, 255, 255);"><strong>
    ${name}
    </strong></span></span>
    </p>

    <p><span style="font-size: 28px;"><span style="color: rgb(255, 255, 255);"><strong></strong></span></span><img
            src="https://s3.amazonaws.com/images.ecwid.com/images/wysiwyg/product/44160194/350616155/1621345090175192324972/Battle_netGames_Delivery_png"
            width="468" height="92"><span class="redactor-invisible-space"></span><br>
    </p>
    <p>
        <iframe width="500" height="280" src="${youtube}" title="YouTube video player"
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""><span id="selection-marker-1" class="redactor-selection-marker"></span><span
            id="selection-marker-1" class="redactor-selection-marker"></span>
        </iframe>
    </p>

    <p>
        <span style="color: rgb(255, 255, 255);"><span style="font-size: 24px;">
        <br>
        <strong>About ${name}</strong></span></span>
    </p>

    <p><span style="font-size: 18px;">${about}</span>
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
                    <li><span class="attributes-list__name">Processor</span><span class="attributes-list__value">Intel
                        Core i5 / AMD Phenom II X3</span></li>
                    <li><span class="attributes-list__name">Graphics</span><span class="attributes-list__value">NVIDIA
                        GeForce GTX 660 / AMD Radeon HD 7950</span></li>
                    <li><span class="attributes-list__name">Memory</span><span class="attributes-list__value">6 GB
                        RAM</span></li>
                    <li><span class="attributes-list__name">System</span><span class="attributes-list__value">Windows 7
                        / 8 / 10 (64-bit)</span></li>
                </ul>
            </div>
        </div>
        <p><br>
        </p>
    </div>
</div>
`
}
