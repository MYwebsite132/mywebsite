from flask import Flask, render_template
import random

app = Flask(__name__)

@app.route('/')
def index():
    # List of Bitcoin wallet addresses
    wallets = [
        "bc1qp04409t2p0r605usvreapx95jea2tg0eca0d8y",
        "bc1qc5dmqgugx8a7d2njfjfk85s3nq044hhrfufu08",
        "bc1q3672ynu8quxmjp0v98wjde3sh32apxrmagkn8s",
        "bc1qzc2h7mpkyy7p6yhmlfpju06t2gkq2nncvtmwag",
        "bc1qyqus8p8l5k7nrf8f5vuk7a7ft8va6677t32ylw",
        "bc1qmp6z7e5s34r2ervmz2p29rnklzcmadue7d3dpr",
        "bc1ql4x0fv34tlxupe0wl7rczsvsyh0n5lhs6gmty9",
        "bc1qc2pgmkl0xh3h05x6f82x30vgn723jhm7pu8ll6",
        "bc1qxlg6p2kevm96cg2nh0ck0l6xsjhc4tex5j0r63",
        "bc1qtr5zgupuad6t7w7dy6vfupjh2l7q79padkgmwy"
    ]
    
    # Render the template and pass the wallet addresses
    return render_template('payment.html', wallets=wallets)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001)
