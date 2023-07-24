import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'react-multi-carousel/lib/styles.css';

export const FiverrBadge = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'fiverr-seller-widget-script-631a7976-b890-4ed7-8469-7e56d28988b8';
    script.src = 'https://widgets.fiverr.com/api/v1/seller/kohlmathieu?widget_id=631a7976-b890-4ed7-8469-7e56d28988b8';
    script.setAttribute('data-config', '{"category_name":"\nProgramming \u0026 Tech\n"}');
    script.async = true;
    script.defer = true;

    const fiverrBadgeDiv = document.getElementById('fiverr-badge-container');
    if (fiverrBadgeDiv) {
      fiverrBadgeDiv.appendChild(script);
    }

    return () => {
      // Clean up the script when the component is unmounted
      fiverrBadgeDiv.removeChild(script);
    };
  }, []);

  return (
    <section className="fiverr-badge" id="fiverr-badges">
        <Container>
            <Row>
                <Col>
                    <h2>Contact me on Fiverr</h2>
                    <div id="fiverr-badge-container">
                        <div
                            itemscope
                            itemtype="http://schema.org/Person"
                            className="fiverr-seller-widget"
                        >
                            <div id="fiverr-widget-seller-data" style={{ display: 'none' }}>
                                <h2 itemprop="name">kohlmathieu</h2>
                                <div itemscope itemtype="http://schema.org/Organization">
                                <span itemprop="name">Fiverr</span>
                                </div>
                                <h2 itemprop="jobtitle">Seller</h2>
                                <div itemprop="description"></div>
                            </div>
                        </div>
                    </div>
                    <div class="text-center">
                        <a href="https://www.fiverr.com/kohlmathieu" target="_blank" rel="noopener noreferrer">
                            <Button>
                                Check out my Gigs
                            </Button>
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  );
};
