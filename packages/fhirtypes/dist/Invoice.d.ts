/*
 * This is a generated file
 * Do not edit manually.
 */

import { Account } from './Account';
import { Annotation } from './Annotation';
import { ChargeItem } from './ChargeItem';
import { CodeableConcept } from './CodeableConcept';
import { Device } from './Device';
import { Extension } from './Extension';
import { Group } from './Group';
import { Identifier } from './Identifier';
import { Meta } from './Meta';
import { Money } from './Money';
import { Narrative } from './Narrative';
import { Organization } from './Organization';
import { Patient } from './Patient';
import { Practitioner } from './Practitioner';
import { PractitionerRole } from './PractitionerRole';
import { Reference } from './Reference';
import { RelatedPerson } from './RelatedPerson';
import { Resource } from './Resource';

/**
 * Invoice containing collected ChargeItems from an Account with
 * calculated individual and total price for Billing purpose.
 */
export interface Invoice {

  /**
   * This is a Invoice resource
   */
  readonly resourceType: 'Invoice';

  /**
   * The logical id of the resource, as used in the URL for the resource.
   * Once assigned, this value never changes.
   */
  id?: string;

  /**
   * The metadata about the resource. This is content that is maintained by
   * the infrastructure. Changes to the content might not always be
   * associated with version changes to the resource.
   */
  meta?: Meta;

  /**
   * A reference to a set of rules that were followed when the resource was
   * constructed, and which must be understood when processing the content.
   * Often, this is a reference to an implementation guide that defines the
   * special rules along with other profiles etc.
   */
  implicitRules?: string;

  /**
   * The base language in which the resource is written.
   */
  language?: string;

  /**
   * A human-readable narrative that contains a summary of the resource and
   * can be used to represent the content of the resource to a human. The
   * narrative need not encode all the structured data, but is required to
   * contain sufficient detail to make it &quot;clinically safe&quot; for a human to
   * just read the narrative. Resource definitions may define what content
   * should be represented in the narrative to ensure clinical safety.
   */
  text?: Narrative;

  /**
   * These resources do not have an independent existence apart from the
   * resource that contains them - they cannot be identified independently,
   * and nor can they have their own independent transaction scope.
   */
  contained?: Resource[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the resource. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the resource and that modifies the
   * understanding of the element that contains it and/or the understanding
   * of the containing element's descendants. Usually modifier elements
   * provide negation or qualification. To make the use of extensions safe
   * and manageable, there is a strict set of governance applied to the
   * definition and use of extensions. Though any implementer is allowed to
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension. Applications processing a
   * resource are required to check for modifier extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * Identifier of this Invoice, often used for reference in correspondence
   * about this invoice or for tracking of payments.
   */
  identifier?: Identifier[];

  /**
   * The current state of the Invoice.
   */
  status: 'draft' | 'issued' | 'balanced' | 'cancelled' | 'entered-in-error';

  /**
   * In case of Invoice cancellation a reason must be given (entered in
   * error, superseded by corrected invoice etc.).
   */
  cancelledReason?: string;

  /**
   * Type of Invoice depending on domain, realm an usage (e.g.
   * internal/external, dental, preliminary).
   */
  type?: CodeableConcept;

  /**
   * The individual or set of individuals receiving the goods and services
   * billed in this invoice.
   */
  subject?: Reference<Patient | Group>;

  /**
   * The individual or Organization responsible for balancing of this
   * invoice.
   */
  recipient?: Reference<Organization | Patient | RelatedPerson>;

  /**
   * Date/time(s) of when this Invoice was posted.
   */
  date?: string;

  /**
   * Indicates who or what performed or participated in the charged
   * service.
   */
  participant?: InvoiceParticipant[];

  /**
   * The organizationissuing the Invoice.
   */
  issuer?: Reference<Organization>;

  /**
   * Account which is supposed to be balanced with this Invoice.
   */
  account?: Reference<Account>;

  /**
   * Each line item represents one charge for goods and services rendered.
   * Details such as date, code and amount are found in the referenced
   * ChargeItem resource.
   */
  lineItem?: InvoiceLineItem[];

  /**
   * The total amount for the Invoice may be calculated as the sum of the
   * line items with surcharges/deductions that apply in certain
   * conditions.  The priceComponent element can be used to offer
   * transparency to the recipient of the Invoice of how the total price
   * was calculated.
   */
  totalPriceComponent?: InvoiceLineItemPriceComponent[];

  /**
   * Invoice total , taxes excluded.
   */
  totalNet?: Money;

  /**
   * Invoice total, tax included.
   */
  totalGross?: Money;

  /**
   * Payment details such as banking details, period of payment,
   * deductibles, methods of payment.
   */
  paymentTerms?: string;

  /**
   * Comments made about the invoice by the issuer, subject, or other
   * participants.
   */
  note?: Annotation[];
}

/**
 * Each line item represents one charge for goods and services rendered.
 * Details such as date, code and amount are found in the referenced
 * ChargeItem resource.
 */
export interface InvoiceLineItem {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * Sequence in which the items appear on the invoice.
   */
  sequence?: number;

  /**
   * The ChargeItem contains information such as the billing code, date,
   * amount etc. If no further details are required for the lineItem,
   * inline billing codes can be added using the CodeableConcept data type
   * instead of the Reference.
   */
  chargeItemReference?: Reference<ChargeItem>;

  /**
   * The ChargeItem contains information such as the billing code, date,
   * amount etc. If no further details are required for the lineItem,
   * inline billing codes can be added using the CodeableConcept data type
   * instead of the Reference.
   */
  chargeItemCodeableConcept?: CodeableConcept;

  /**
   * The price for a ChargeItem may be calculated as a base price with
   * surcharges/deductions that apply in certain conditions. A
   * ChargeItemDefinition resource that defines the prices, factors and
   * conditions that apply to a billing code is currently under
   * development. The priceComponent element can be used to offer
   * transparency to the recipient of the Invoice as to how the prices have
   * been calculated.
   */
  priceComponent?: InvoiceLineItemPriceComponent[];
}

/**
 * The ChargeItem contains information such as the billing code, date,
 * amount etc. If no further details are required for the lineItem,
 * inline billing codes can be added using the CodeableConcept data type
 * instead of the Reference.
 */
export type InvoiceLineItemChargeItem = CodeableConcept | Reference<ChargeItem>;

/**
 * The price for a ChargeItem may be calculated as a base price with
 * surcharges/deductions that apply in certain conditions. A
 * ChargeItemDefinition resource that defines the prices, factors and
 * conditions that apply to a billing code is currently under
 * development. The priceComponent element can be used to offer
 * transparency to the recipient of the Invoice as to how the prices have
 * been calculated.
 */
export interface InvoiceLineItemPriceComponent {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * This code identifies the type of the component.
   */
  type: 'base' | 'surcharge' | 'deduction' | 'discount' | 'tax' | 'informational';

  /**
   * A code that identifies the component. Codes may be used to
   * differentiate between kinds of taxes, surcharges, discounts etc.
   */
  code?: CodeableConcept;

  /**
   * The factor that has been applied on the base price for calculating
   * this component.
   */
  factor?: number;

  /**
   * The amount calculated for this component.
   */
  amount?: Money;
}

/**
 * Indicates who or what performed or participated in the charged
 * service.
 */
export interface InvoiceParticipant {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * Describes the type of involvement (e.g. transcriptionist, creator
   * etc.). If the invoice has been created automatically, the Participant
   * may be a billing engine or another kind of device.
   */
  role?: CodeableConcept;

  /**
   * The device, practitioner, etc. who performed or participated in the
   * service.
   */
  actor: Reference<Practitioner | Organization | Patient | PractitionerRole | Device | RelatedPerson>;
}
