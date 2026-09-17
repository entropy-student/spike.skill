#!/usr/bin/env bash
set -euo pipefail

WP_PATH="${WP_PATH:-/tmp/conversion-leak-audit-wp}"
WP="php /tmp/wp-cli.phar --path=${WP_PATH}"
RESULT_DIR="${RESULT_DIR:-$PWD/independent-store-operations/validation/g1_wordpress/results}"
mkdir -p "$RESULT_DIR"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

cat > "$TMP/home.html" <<'HTML'
<!-- wp:group {"layout":{"type":"constrained"}} -->
<div class="wp-block-group">
<!-- wp:heading {"level":1} --><h1 class="wp-block-heading">Find where your store makes buyers hesitate.</h1><!-- /wp:heading -->
<!-- wp:paragraph --><p>Scan the public buying experience and surface evidence-backed friction before spending more on traffic.</p><!-- /wp:paragraph -->
<!-- wp:html --><form class="cla-scan-placeholder" action="#" method="get"><label for="store-url">Store URL</label><input id="store-url" name="store-url" type="url" placeholder="https://yourstore.com" disabled><button type="button" disabled>Scan my store</button></form><!-- /wp:html -->
<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">What you get</h2><!-- /wp:heading -->
<!-- wp:list --><ul><li>Top observable conversion risks</li><li>Page and evidence location</li><li>What to fix, measure, or test next</li></ul><!-- /wp:list -->
</div><!-- /wp:group -->
HTML

cat > "$TMP/how.html" <<'HTML'
<!-- wp:heading {"level":1} --><h1 class="wp-block-heading">How it works</h1><!-- /wp:heading -->
<!-- wp:list {"ordered":true} --><ol><li>Enter a public store URL.</li><li>We inspect bounded public evidence.</li><li>Rules distinguish facts, risks, missing context, and experiments.</li><li>You receive a prioritized repair queue.</li></ol><!-- /wp:list -->
<!-- wp:paragraph --><p>Public scanning does not claim to prove the root cause of weak sales. Private funnel data and experiments are separate evidence levels.</p><!-- /wp:paragraph -->
HTML

cat > "$TMP/demo.html" <<'HTML'
<!-- wp:heading {"level":1} --><h1 class="wp-block-heading">Demo report</h1><!-- /wp:heading -->
<!-- wp:paragraph --><p>A sample report shows page location, observable fact, evidence confidence, why it may matter, and the next safe action.</p><!-- /wp:paragraph -->
<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Example finding</h2><!-- /wp:heading -->
<!-- wp:paragraph --><p><strong>Shipping information is difficult to discover before checkout.</strong> This is an observable transparency risk, not a claim that shipping caused lost orders.</p><!-- /wp:paragraph -->
HTML

cat > "$TMP/pricing.html" <<'HTML'
<!-- wp:heading {"level":1} --><h1 class="wp-block-heading">Pricing</h1><!-- /wp:heading -->
<!-- wp:paragraph --><p>Free preview: the most important observable issues.</p><!-- /wp:paragraph -->
<!-- wp:paragraph --><p>Full repair queue: pricing is still under validation. No production payment is enabled in this baseline.</p><!-- /wp:paragraph -->
HTML

cat > "$TMP/faq.html" <<'HTML'
<!-- wp:heading {"level":1} --><h1 class="wp-block-heading">FAQ</h1><!-- /wp:heading -->
<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Does this tell me exactly why people are not buying?</h2><!-- /wp:heading -->
<!-- wp:paragraph --><p>No. Public scanning finds observable facts and research-supported risks. Store analytics and experiments are needed for stronger causal conclusions.</p><!-- /wp:paragraph -->
<!-- wp:heading {"level":2} --><h2 class="wp-block-heading">Will the scanner log in or place an order?</h2><!-- /wp:heading -->
<!-- wp:paragraph --><p>No. V0 is bounded to public, non-destructive inspection.</p><!-- /wp:paragraph -->
HTML

cat > "$TMP/blog.html" <<'HTML'
<!-- wp:heading {"level":1} --><h1 class="wp-block-heading">Insights</h1><!-- /wp:heading -->
<!-- wp:paragraph --><p>Evidence-based notes on ecommerce decision friction, trust, checkout, merchandising, and measurement.</p><!-- /wp:paragraph -->
HTML

create_page() {
  local title="$1" slug="$2" file="$3"
  $WP post create --post_type=page --post_status=publish --post_title="$title" --post_name="$slug" --post_content="$(cat "$file")" --porcelain
}

HOME_ID=$(create_page "Conversion Leak Audit" "home" "$TMP/home.html")
HOW_ID=$(create_page "How it works" "how-it-works" "$TMP/how.html")
DEMO_ID=$(create_page "Demo" "demo" "$TMP/demo.html")
PRICING_ID=$(create_page "Pricing" "pricing" "$TMP/pricing.html")
FAQ_ID=$(create_page "FAQ" "faq" "$TMP/faq.html")
BLOG_ID=$(create_page "Blog" "blog" "$TMP/blog.html")

$WP option update show_on_front page >/dev/null
$WP option update page_on_front "$HOME_ID" >/dev/null
$WP option update page_for_posts "$BLOG_ID" >/dev/null
$WP option update blogname "Conversion Leak Audit" >/dev/null
$WP option update blogdescription "Evidence before more traffic." >/dev/null
$WP option update permalink_structure '' >/dev/null

cat > "$RESULT_DIR/page-ids.env" <<EOF
HOME_ID=$HOME_ID
HOW_ID=$HOW_ID
DEMO_ID=$DEMO_ID
PRICING_ID=$PRICING_ID
FAQ_ID=$FAQ_ID
BLOG_ID=$BLOG_ID
EOF
